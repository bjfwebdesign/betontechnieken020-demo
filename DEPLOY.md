# Putting the website online (GitHub Pages)

No technical knowledge needed. Takes about 15 minutes.

## What you need

- A free GitHub account: https://github.com/signup
- This folder with all the website files (everything sits directly in the folder, there are no sub-folders).

## Step 1: Create a repository

1. Log in on https://github.com.
2. Click the **+** at the top right → **New repository**.
3. Name it, for example: `betontechnieken020`.
4. Choose **Public**.
5. Click **Create repository**.

## Step 2: Upload the files

1. On the new, empty repository page, click the link **"uploading an existing file"**.
2. Open this folder on your computer, select **all files** (Cmd+A on Mac, Ctrl+A on Windows) and drag them into the browser window.
   - The `.md` files (like this one) may be uploaded too; they don't show up on the website.
3. Wait until every file is listed (there are about 110).
4. Scroll down and click **Commit changes**.

## Step 3: Switch on GitHub Pages

1. In the repository, click **Settings** (top menu).
2. Click **Pages** in the left menu.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh the page. At the top you'll see: *"Your site is live at https://YOUR-NAME.github.io/betontechnieken020/"*.

That link is the demo.

## Changing something later

1. Open the file on GitHub (e.g. `index.html`).
2. Click the **pencil** icon, make the change, click **Commit changes**.
3. After about a minute the change is live.

To replace an image: upload a new file **with exactly the same name** (Add file → Upload files).

## Before going live on the real domain

Work through `PLACEHOLDERS.md`. The most important items:

1. **Form endpoint**: fill in `FORM_ENDPOINT` in `app.js`. Until then, forms open the visitor's e-mail app instead of sending directly.
2. **Google Tag Manager / Ads conversion**: so Google Ads can optimise on real quote requests.
3. **KvK / btw** in the footer, and check the privacy statement.
4. **Custom domain**: in Settings → Pages → *Custom domain*, enter `www.betontechnieken020.nl`, then point the domain's DNS to GitHub (the domain registrar can do this; GitHub shows the exact records).

## Checking it works

- Open the site on your phone: the bar at the bottom (Bellen · WhatsApp · Offerte) should be visible.
- Open `…/vloercoatings.html?gclid=test`, click "start de uitgebreide schadecheck" and check that `gclid=test` is still in the address bar.
