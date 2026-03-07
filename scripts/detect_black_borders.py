#!/usr/bin/env python3
"""
检测图库中哪些图片带有明显黑边（图片内容四周的黑色 letterbox/pillarbox），
输出对应的作品 id，便于加入 midjourney.js 的 cropBlackBordersIds。

依赖: pip install Pillow
用法: 在项目根目录执行
  python3 scripts/detect_black_borders.py
  或
  python3 scripts/detect_black_borders.py --assets static/assets/midjourney
"""
from __future__ import print_function
import os
import re
import sys

try:
    from PIL import Image
except ImportError:
    print("请先安装 Pillow: pip install Pillow", file=sys.stderr)
    sys.exit(1)

# 项目根目录（脚本所在目录的上一级）
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "static", "assets", "midjourney")
JS_FILE = os.path.join(ROOT, "static", "js", "midjourney.js")

# 边缘采样比例（每条边取 3% 宽度/高度）
EDGE_RATIO = 0.03
# 若边缘平均亮度低于此值，视为黑边（0-255）
BLACK_THRESHOLD = 30
# 至少几条边是“黑”的才认为该图有黑边（1=至少一条，2=至少两条，4=四边都检测）
MIN_BLACK_EDGES = 1


def luminance(pixel):
    """RGB 或 RGBA 转近似亮度 (0-255)。"""
    if len(pixel) >= 3:
        r, g, b = pixel[0], pixel[1], pixel[2]
        return (0.299 * r + 0.587 * g + 0.114 * b)
    return pixel[0] if len(pixel) >= 1 else 0


def mean_luminance_region(im, x0, y0, w, h):
    """区域平均亮度。"""
    if w <= 0 or h <= 0:
        return 255
    total = 0.0
    n = 0
    for y in range(y0, min(y0 + h, im.height)):
        for x in range(x0, min(x0 + w, im.width)):
            total += luminance(im.getpixel((x, y)))
            n += 1
    return total / n if n else 255


def has_black_borders(path, edge_ratio=EDGE_RATIO, black_thresh=BLACK_THRESHOLD):
    """
    检测图片四条边是否有明显黑边。
    返回 (是否有黑边, 四条边的平均亮度列表 [上,下,左,右])。
    """
    try:
        with Image.open(path) as im:
            im = im.convert("RGB")
    except Exception as e:
        return False, []

    w, h = im.width, im.height
    ew = max(1, int(w * edge_ratio))
    eh = max(1, int(h * edge_ratio))

    top = mean_luminance_region(im, 0, 0, w, eh)
    bottom = mean_luminance_region(im, 0, h - eh, w, eh)
    left = mean_luminance_region(im, 0, 0, ew, h)
    right = mean_luminance_region(im, w - ew, 0, ew, h)
    edges = [top, bottom, left, right]
    black_count = sum(1 for e in edges if e <= black_thresh)
    return black_count >= MIN_BLACK_EDGES, edges


def extract_id_to_path(js_path):
    """从 midjourney.js 中解析出 id -> 第一张图 path（不含 static/ 前缀的 basename）。"""
    with open(js_path, "r", encoding="utf-8") as f:
        text = f.read()
    # 匹配 id: 数字 与 image: 'static/assets/midjourney/...' 的对应关系：
    # 在每个 artwork 对象内，id 在前，image 在后；多个 image 时取第一个（单图或 images[0]）
    id_to_basename = {}
    # 简单策略：找所有 id: \d+ 和 image: '...midjourney/XXX'，按出现顺序配对（每个对象先 id 后 image）
    ids = re.findall(r"\bid:\s*(\d+)\s*[,}]", text)
    # 只取 static/assets/midjourney/ 的 image（不含 images: [...] 里的）
    images = re.findall(r"image:\s*['\"]static/assets/midjourney/([^'\"]+)['\"]", text)
    # 同一对象内 id 紧跟 image 之前，且 artworks 顺序与 id 顺序一致，用位置对应
    # 实际上 id 和 image 在同一个对象里，对象顺序即数组顺序，所以 ids 与 images 按序对应
    # 但 ids 可能比 images 多（有的条目有 images 数组没有 image），需要按结构来
    # 更稳：找 "id: N" 到下一个 "id:" 之间的 "image: '...'" 或 "images: [" 前的 "image: '...'"
    blocks = re.split(r"\bid:\s*(\d+)\s*[,}]", text)
    # blocks[0] 是开头的废话，blocks[1]=id1, blocks[2]=到下一个 id 之前的内容, blocks[3]=id2, ...
    for i in range(1, len(blocks), 2):
        if i + 1 >= len(blocks):
            break
        aid = blocks[i].strip().rstrip(",")
        block = blocks[i + 1]
        m = re.search(r"image:\s*['\"]static/assets/midjourney/([^'\"]+)['\"]", block)
        if m:
            id_to_basename[int(aid)] = m.group(1)
    return id_to_basename


def main():
    assets = ASSETS
    if len(sys.argv) > 1 and sys.argv[1] == "--assets":
        if len(sys.argv) > 2:
            assets = os.path.abspath(sys.argv[2])
        else:
            assets = ASSETS

    id_to_path = extract_id_to_path(JS_FILE)
    found = []
    for aid, basename in sorted(id_to_path.items()):
        path = os.path.join(assets, basename)
        if not os.path.isfile(path):
            continue
        ok, edges = has_black_borders(path)
        if ok:
            found.append((aid, edges))

    if not found:
        print("未检测到带黑边的图片。")
        return
    print("以下作品 id 检测到明显黑边，可加入 cropBlackBordersIds：")
    print([aid for aid, _ in found])
    print("\n各条边平均亮度 [上,下,左,右]（≤%d 视为黑边）：" % BLACK_THRESHOLD)
    for aid, edges in found:
        print("  id %s: %s" % (aid, [round(e, 1) for e in edges]))


if __name__ == "__main__":
    main()
