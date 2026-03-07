#!/usr/bin/env bash
# 生成 Midjourney 缩略图到 static/assets/midjourney/thumbs/
# 使用 macOS 自带 sips；按原图尺寸自适应：大图用 800px 保证清晰度，小图用 600px 平衡体积
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MID="$ROOT/static/assets/midjourney"
THUMBS="$MID/thumbs"
mkdir -p "$THUMBS"
count=0
while IFS= read -r -d '' f; do
  name=$(basename "$f")
  out="$THUMBS/$name"
  if [ ! -f "$out" ] || [ "$f" -nt "$out" ]; then
    w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/ {print $2}')
    h=$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/ {print $2}')
    max=$((w > h ? w : h))
    if [ -n "$max" ] && [ "$max" -gt 1600 ]; then
      Z=800
    elif [ -n "$max" ] && [ "$max" -gt 1000 ]; then
      Z=650
    else
      Z=600
    fi
    sips -Z "$Z" "$f" --out "$out" 2>/dev/null || cp "$f" "$out"
    count=$((count + 1))
  fi
done < <(find "$MID" -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) -print0)
echo "Thumbnails: $THUMBS ($count updated)"
