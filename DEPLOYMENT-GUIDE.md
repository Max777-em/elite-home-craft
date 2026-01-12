# Deploy Elite Home Craft to Max's Projects Account

## Quick Deployment Steps

### Method 1: Using GitHub (Easiest)

1. **Create GitHub Repository**
   - Go to: https://github.com/new
   - Repository name: `elite-home-craft`
   - Make it Public
   - Click "Create repository"

2. **Push Code to GitHub**
   ```bash
   cd /Users/bella/elite-home-craft
   git remote remove origin  # Remove old remote if exists
   git remote add origin https://github.com/YOUR_USERNAME/elite-home-craft.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel (Max's Account)**
   - Login to Vercel with Max's account: https://vercel.com/login
   - Go to: https://vercel.com/new?teamSlug=maxs-projects-61069016
   - Click "Import Git Repository"
   - Select your `elite-home-craft` repository
   - Click "Deploy"
   - Done! ✅

### Method 2: Direct Upload (Faster)

1. **Download the ZIP file**
   - Location: `/Users/bella/elite-home-craft/elite-home-craft-deployment.zip`

2. **Login to Max's Vercel Account**
   - Go to: https://vercel.com/login
   - Login with Max's account credentials

3. **Create New Project**
   - Go to: https://vercel.com/new?teamSlug=maxs-projects-61069016
   - Or click "Add New..." → "Project"

4. **Upload Files**
   - Drag and drop the `elite-home-craft-deployment.zip` file
   - Or click to browse and select the ZIP file

5. **Configure Project**
   - Project Name: `elite-home-craft`
   - Framework Preset: Other
   - Click "Deploy"

6. **Done!** Your site will be live at:
   - `https://elite-home-craft-maxs-projects.vercel.app`

### Method 3: Using Vercel CLI (Current Session)

If you're already logged in to Max's account:

```bash
cd /Users/bella/elite-home-craft
vercel --yes --prod
```

## What's Included

✅ All HTML, CSS, and JavaScript files
✅ Complete Elite Home Craft branding
✅ Fully responsive design
✅ Contact form
✅ All sections and features

## After Deployment

Your website will be available at:
- `https://elite-home-craft.vercel.app` (if available)
- Or `https://elite-home-craft-[team-name].vercel.app`

## Need Help?

Just let me know and I'll assist you!
