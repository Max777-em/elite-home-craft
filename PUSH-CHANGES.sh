#!/bin/bash

echo "🚀 Pushing Elite Home Craft 2026 Design Updates..."
echo ""
git push origin main
echo ""
if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Changes will auto-deploy to Vercel"
    echo ""
    echo "New Features Added:"
    echo "  ✨ Glassmorphic header with blur effects"
    echo "  🎨 3D service cards with tilt animations"
    echo "  💫 Smooth scroll reveal animations"
    echo "  🌈 Modern gradient color schemes"
    echo "  ⚡ Micro-interactions on hover"
    echo "  📱 Enhanced responsive design"
    echo "  🎭 Parallax scrolling effects"
    echo "  💎 Custom cursor glow (desktop)"
    echo ""
else
    echo "❌ Push failed. Please authenticate and try again."
fi
