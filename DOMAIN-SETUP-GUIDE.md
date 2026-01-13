# Custom Domain Setup Guide
## Setting up patchmate.help on Vercel

Your website files are ready! Follow these steps to connect your domain:

---

## Step 1: Add Domain in Vercel Dashboard

1. Go to your Vercel project: https://vercel.com/maxs-projects-61069016/elite-home-craft
2. Click on **Settings** tab
3. Click on **Domains** in the left sidebar
4. In the input field, type: `patchmate.help`
5. Click **Add**
6. Also add `www.patchmate.help` (repeat steps 4-5)

---

## Step 2: Configure DNS Records

Vercel will show you the DNS records to add. You need to add these at your domain registrar where you bought `patchmate.help`:

### For the root domain (patchmate.help):
**Option A - Using A Record (Recommended):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21`

**Option B - Using CNAME:**
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com`

### For www subdomain (www.patchmate.help):
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

---

## Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- Usually it's much faster (5-30 minutes)
- You can check status at: https://dnschecker.org/

---

## Step 4: Verify in Vercel

1. Go back to Vercel Dashboard → Domains
2. You should see your domains listed
3. Wait for the status to show "Valid Configuration" with a green checkmark
4. Vercel will automatically provision SSL certificates (HTTPS)

---

## Your New URLs:

- **Primary:** https://patchmate.help
- **WWW:** https://www.patchmate.help
- **Old Vercel URL:** https://elite-home-craft-ecru.vercel.app (will still work but redirects to new domain)

---

## Troubleshooting:

### Domain not working after 24 hours?
1. Check DNS records are correct at your registrar
2. Clear your browser cache
3. Try in incognito/private window
4. Check Vercel dashboard for any error messages

### SSL Certificate issues?
- Vercel automatically provisions SSL
- This happens after DNS is configured
- May take a few minutes after DNS propagates

---

## Common Domain Registrars:

### GoDaddy:
1. Login → My Products → DNS → Manage Zones
2. Add/Edit records as shown above

### Namecheap:
1. Login → Domain List → Manage → Advanced DNS
2. Add/Edit records as shown above

### Google Domains:
1. Login → My Domains → DNS
2. Add/Edit records as shown above

### Cloudflare:
1. Login → Select Domain → DNS
2. Add/Edit records as shown above
3. Make sure Proxy Status is OFF (gray cloud) for CNAME records

---

## Need Help?

Contact Vercel Support: https://vercel.com/support

Or check Vercel's domain documentation: https://vercel.com/docs/concepts/projects/domains

---

**Your website is ready to go live on patchmate.help! 🎉**
