#!/usr/bin/env bash
# 生成 Midjourney 缩略图到 static/assets/midjourney/thumbs/
# 使用 macOS 自带 sips，最大边 400px，加快首屏加载
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
    sips -Z 400 "$f" --out "$out" 2>/dev/null || cp "$f" "$out"
    count=$((count + 1))
  fi
done < <(find "$MID" -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" \) -print0)
echo "Thumbnails: $THUMBS ($count updated)"
