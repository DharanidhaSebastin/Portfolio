# Dharanidha Sebastin - Portfolio Website

## Overview
A professional portfolio website for Dharanidha Sebastin, a Full Stack Developer with 3+ years of experience at DataPattern. The site showcases skills, experience, projects, education, and certifications with a modern, technical design.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js, Node.js
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Custom dark/light theme with technical aesthetic

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── portfolio/       # Portfolio section components
│   │   │   ├── header.tsx   # Navigation header
│   │   │   ├── hero.tsx     # Hero section with profile
│   │   │   ├── about.tsx    # About me section
│   │   │   ├── skills.tsx   # Skills with progress bars
│   │   │   ├── experience.tsx # Work experience timeline
│   │   │   ├── projects.tsx # Featured projects
│   │   │   ├── education.tsx # Education & certifications
│   │   │   ├── contact.tsx  # Contact form
│   │   │   └── footer.tsx   # Site footer
│   │   ├── ui/              # Shadcn UI components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── lib/
│   │   ├── portfolio-data.ts # Portfolio content data
│   │   └── queryClient.ts
│   ├── pages/
│   │   └── portfolio.tsx    # Main portfolio page
│   └── index.css            # Theme colors and utilities
server/
├── routes.ts                # API routes (contact form)
└── storage.ts               # In-memory storage for messages
shared/
└── schema.ts                # Data schemas (Zod + Drizzle)
```

## Features
- **Hero Section**: Profile photo, name, title, call-to-action buttons
- **About Section**: Summary, location, highlights grid
- **Skills Section**: 5 categories with progress bars (Frontend, Backend, Database, Cloud, Tools)
- **Experience Timeline**: Career progression at DataPattern
- **Projects Showcase**: 3 production apps (Elevate Pet Health, CultureSeekerz, Famlynk)
- **Education & Certifications**: BCA degree, HackerRank & Microsoft Azure certifications
- **Contact Form**: Validated form with API integration
- **Dark/Light Theme**: Toggle between dark and light modes

## API Endpoints
- `POST /api/contact` - Submit contact form message
  - Body: `{ name, email, subject, message }`
  - Response: `{ success: true, message: "Message sent successfully", id }`
- `GET /api/contact` - Retrieve all messages (for admin use)

## Running the Project
The project runs on port 5000 with:
```bash
npm run dev
```

## Recent Changes
- January 2026: Initial portfolio website implementation
  - Created all portfolio sections with stunning visuals
  - Implemented dark/light theme toggle
  - Added contact form with validation and API
  - Responsive design for all screen sizes

## User Preferences
- Technical, developer-focused design aesthetic
- Dark theme as default
- Monospace fonts for code-related elements
- Blue/purple gradient accent colors