# Surhires — Better Hires. Brighter Futures.

Surhires is a responsive job portal frontend designed to connect job seekers with career opportunities and help employers discover talent. This project was developed as part of a frontend development internship assignment for **Meru Technosoft**.

## Overview

The application provides a clean, accessible interface for exploring job opportunities, viewing job details, and discovering hiring plans. It focuses on responsive design, reusable components, intuitive navigation, and a consistent user experience.

## Features

### Home Page
- Hero section with job-seeker and employer calls to action.
- Job search interface and featured job listings.
- Career categories and employer-focused sections.
- Testimonials, FAQs, and hiring call to action.

### Jobs Page
- Browse sample job listings.
- Search jobs by keyword and location.
- Filter opportunities by employment type, category, and experience.
- Sort job listings and save jobs during the current session.
- Open individual job detail pages.
- Responsive layout for desktop, tablet, and mobile.

### Employers Page
- Explore employer benefits and the hiring process.
- Compare pricing plans.
- Submit a job-posting form with frontend validation.
- View a success message after a valid demo submission.

## Tech Stack

- **Framework:** Next.js with App Router
- **Language:** JavaScript
- **UI Styling:** CSS
- **Icons:** Lucide React
- **Development Tools:** Node.js and npm
- **Deployment:** Ready for deployment on Vercel or another compatible hosting platform

## Project Structure

```text
surhires/
├── public/
├── src/
│   ├── app/
│   │   ├── employers/
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   ├── jobs/
│   │   │   ├── [id]/
│   │   │   │   └── page.js
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js (a current LTS version is recommended)
- npm

### Installation

1. Clone the repository or download the project.
2. Open a terminal in the project directory.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To create a production build, run:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/jobs` | Job listings, search, and filters |
| `/jobs/[id]` | Individual job details |
| `/employers` | Employer information, pricing plans, and job-posting form |

## Design and Accessibility

The project aims to provide:

- Responsive layouts for mobile, tablet, and desktop screens.
- Reusable navigation and footer components.
- Semantic page structure and clear heading hierarchy.
- Keyboard-accessible interactive elements and visible focus states.
- Consistent typography, spacing, and visual styling.

## Project Scope

This is a **frontend demonstration project**. Job listings and job details use sample data. Job saving is session-based, and the job-posting form demonstrates client-side validation and a success state. No backend, database, authentication, or actual job submission service is configured.

## Future Improvements

- Connect job listings to a backend and database.
- Add authentication for job seekers and employers.
- Persist saved jobs across sessions.
- Implement real job posting and application workflows.
- Add pagination and advanced job search.
- Integrate automated accessibility and performance testing.

## Author

**Anushka Gangwar**  
B.Tech Computer Science and Engineering Student

---

*Developed as a frontend development internship assignment for Meru Technosoft.*
