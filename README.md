# CareerOS

**Your AI career coach for every step ahead.**

CareerOS is a full-stack, AI-powered career coaching platform. It reviews your resume, preps you for interviews, generates tailored cover letters, and tracks live industry demand and salary data for your field — all from one dashboard.

![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)









---

## 🚀 Features

- 🤖 **AI Resume Review** – Analyze resumes with AI and receive a detailed resume score, strengths, weaknesses, and personalized improvement suggestions.

  <img width="1912" height="732" alt="AI Resume Review" src="https://github.com/user-attachments/assets/483cf3d8-fbc3-4d34-9ba8-e1c5862362e4" />

- 📝 **AI Cover Letter Generator** – Generate customized, ATS-friendly cover letters tailored to specific job descriptions in seconds.

  <img width="1916" height="737" alt="AI Cover Letter Generator" src="https://github.com/user-attachments/assets/6c48d742-e81c-4640-9f83-3f2a282275fd" />


- 📊 **Industry Insights Dashboard** – Explore real-time market outlook, industry growth, demand levels, salary trends, top in-demand skills, and weekly updated career insights.

  <img width="1895" height="501" alt="Industry Insights Dashboard" src="https://github.com/user-attachments/assets/c45ebef2-a53d-4634-97b9-d64e3e92e09f" />

- 📈 **Career Growth Tools** – Access an integrated suite of AI-powered tools including:
  - Resume Builder
  - AI Cover Letter Generator
  - Interview Preparation
  - Industry Insights
- **Personalized onboarding** — Set your industry, specialization, experience, skills, and bio to personalize every feature; editable anytime from your profile.
- **Secure authentication** — Full sign-up / sign-in flow with protected routes.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) |
| Auth | [Clerk](https://clerk.com/) |
| Database | [Neon](https://neon.tech/) (PostgreSQL) |
| ORM | [Prisma](https://www.prisma.io/) |
| AI | [Google Gemini API](https://ai.google.dev/) |
| Background jobs | [Inngest](https://www.inngest.com/) (scheduled weekly insight refresh) |
| Forms & validation | React Hook Form + Zod |

---

## Getting started

### Prerequisites

- Node.js 18 or later
- A [Neon](https://neon.tech/) PostgreSQL database (or any Postgres instance)
- A [Clerk](https://clerk.com/) application (for authentication)
- A [Google Gemini API](https://ai.google.dev/) key
- (Optional, for local background job testing) an [Inngest](https://www.inngest.com/) account

### 1. Clone the repository

```bash
git clone https://github.com/Akarshak78/CareerOS.git
cd CareerOS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL=

# Clerk authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=

# Inngest (optional for local dev)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```
CareerOS/
├── app/
│   ├── (auth)/            # Sign-in / sign-up routes
│   ├── (main)/             # Protected app routes
│   │   ├── dashboard/       # Industry insights dashboard
│   │   ├── onboarding/      # Profile setup / edit
│   │   ├── resume/          # Resume builder & review
│   │   ├── ai-cover-letter/ # Cover letter generator
│   │   └── interview/       # Interview prep
│   └── lib/                # Schemas & shared app-level utilities
├── actions/                # Server actions (user, resume, cover letter, interview, dashboard)
├── components/             # Shared UI components (header, shadcn components, etc.)
├── data/                   # Static data (industries, FAQs, features)
├── hooks/                  # Custom React hooks
├── lib/                    # Core utilities (Prisma client, Inngest client, auth helpers)
├── prisma/                 # Prisma schema & migrations
└── public/                 # Static assets (logo, images)
```

---

## Authentication & route protection

Auth is handled by Clerk. `middleware.js` protects app routes (`/dashboard`, `/onboarding`, `/resume`, `/interview`, `/ai-cover-letter`) using `clerkMiddleware` + `auth.protect()`, redirecting unauthenticated users to `/sign-in`.

---

## Background jobs

Weekly industry insight refreshes run through [Inngest](https://www.inngest.com/). In development, run the Inngest dev server alongside `npm run dev`:

```bash
npx inngest-cli@latest dev
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## License

This project is licensed under the MIT License.
