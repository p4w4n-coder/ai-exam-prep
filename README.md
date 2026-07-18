# AI Exam Prep — Free AB-731 & CPMAI Practice Site

1,082 free practice questions for Microsoft AB-731 and PMI-CPMAI certifications.

## Deploy in 10 minutes — completely free

### Step 1: Create a GitHub account (free)
Go to https://github.com and sign up.

### Step 2: Create a new repository
- Click "New repository"
- Name it: `ai-exam-prep`
- Set to Public
- Click "Create repository"

### Step 3: Upload this project
You have two options:

**Option A — GitHub Desktop (easiest, no command line):**
1. Download GitHub Desktop from https://desktop.github.com
2. Clone your new repository
3. Copy all files from this folder into the cloned folder
4. Commit and push

**Option B — Command line:**
```bash
cd aiexamprep
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-exam-prep.git
git push -u origin main
```

### Step 4: Deploy to Vercel (free forever)
1. Go to https://vercel.com and sign up with your GitHub account
2. Click "New Project"
3. Import your `ai-exam-prep` repository
4. Framework preset: **Create React App**
5. Click "Deploy"
6. In ~2 minutes your site is live at `ai-exam-prep.vercel.app`

That's it. Free hosting, free SSL, automatic deploys on every push.

---

## Add Google AdSense (optional revenue)

1. Go to https://adsense.google.com and apply with your live site URL
2. Wait 2-4 weeks for approval (requires some content and traffic)
3. Once approved, get your Publisher ID (`ca-pub-XXXXXXXXXX`)
4. In `public/index.html`, uncomment the AdSense script and replace `ca-pub-XXXXXXXXXXXXXXXX`
5. In `src/pages/QuizPage.js`, uncomment the `<ins>` blocks and add your ad-slot IDs
6. Push to GitHub — Vercel deploys automatically

## Add a custom domain (optional, ~$10/year)

1. Buy a domain at https://www.namecheap.com (e.g., `aiexamprep.io`)
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow DNS instructions
4. Done — free SSL included

## Questions structure

All questions live in `src/data/quizData.json`. Each quiz has:
- `id` — unique identifier
- `title` — display name
- `exam` — "AB-731" or "CPMAI"
- `total` — question count
- `sections` — array of sections, each with `questions`

Each question has:
- `q` — question text
- `opts` — array of 4 options
- `ans` — index of correct answer (0-3)
- `explain` — explanation shown after answering

## SEO tips to get organic traffic

1. Submit your site to Google Search Console (free): https://search.google.com/search-console
2. Add your sitemap URL in Search Console
3. The site already has SEO meta tags targeting "AB-731 practice exam" and "CPMAI practice questions"
4. Share in LinkedIn groups and Reddit (r/projectmanagement, r/ArtificialIntelligence)
5. It typically takes 2-3 months to appear in Google results
