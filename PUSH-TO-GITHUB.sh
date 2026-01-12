#!/bin/bash

echo "🚀 Pushing Elite Home Craft to GitHub..."
echo ""
echo "Repository: https://github.com/Max777-em/elite-home-craft"
echo ""

# Push to GitHub
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next step: Deploy to Vercel"
    echo "Go to: https://vercel.com/new?teamSlug=maxs-projects-61069016"
    echo "Then click 'Import Git Repository' and select: elite-home-craft"
    echo ""
else
    echo ""
    echo "❌ Push failed. You may need to authenticate."
    echo ""
    echo "Try running: gh auth login"
    echo "Or use a personal access token"
    echo ""
fi
