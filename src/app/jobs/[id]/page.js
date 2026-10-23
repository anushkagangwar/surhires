
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PixelCraft Studio",
    location: "Remote",
    type: "Full-time",
    category: "Engineering",
    experience: "Entry level",
    salary: "₹6–10 LPA",
    posted: "2 days ago",
    description:
      "Build intuitive, responsive interfaces and delightful digital experiences with a collaborative product team.",
    initials: "P",
    color: "#e5e9ff",
    featured: true,
    responsibilities: [
      "Build responsive user interfaces using modern frontend technologies.",
      "Collaborate with designers and developers to improve user experience.",
      "Write clean, reusable and maintainable code.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Northstar Digital",
    location: "Bengaluru",
    type: "Full-time",
    category: "Design",
    experience: "Mid level",
    salary: "₹8–12 LPA",
    posted: "1 day ago",
    description:
      "Turn complex user problems into thoughtful product experiences through research, prototyping and design.",
    initials: "N",
    color: "#dff4eb",
    featured: false,
    responsibilities: [
      "Research user needs and design intuitive experiences.",
      "Create wireframes and interactive prototypes.",
      "Collaborate with product managers and developers.",
    ],
    skills: ["UI/UX", "Figma", "Prototyping", "User Research"],
  },
  {
    id: 3,
    title: "MERN Stack Developer",
    company: "LaunchLayer",
    location: "Hybrid",
    type: "Internship",
    category: "Engineering",
    experience: "Entry level",
    salary: "₹15k–25k/mo",
    posted: "3 days ago",
    description:
      "Work across React, Node.js and MongoDB while contributing to real-world full-stack product features.",
    initials: "L",
    color: "#fcebd9",
    featured: true,
    responsibilities: [
      "Develop frontend features using React.",
      "Build and integrate REST APIs using Node.js and Express.",
      "Work with MongoDB and collaborate through Git.",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  },
  {
    id: 4,
    title: "Digital Marketing Associate",
    company: "BloomReach Media",
    location: "Delhi",
    type: "Full-time",
    category: "Marketing",
    experience: "Entry level",
    salary: "₹4–6 LPA",
    posted: "4 days ago",
    description:
      "Help brands grow through creative campaigns, content strategy and data-driven marketing experiments.",
    initials: "B",
    color: "#f8e4ed",
    featured: false,
    responsibilities: [
      "Assist with digital marketing campaigns.",
      "Create and coordinate engaging content.",
      "Review campaign performance and prepare reports.",
    ],
    skills: ["Content Strategy", "SEO", "Analytics", "Communication"],
  },
  {
    id: 5,
    title: "Backend Developer Intern",
    company: "CloudNest Labs",
    location: "Remote",
    type: "Internship",
    category: "Engineering",
    experience: "Entry level",
    salary: "₹12k–20k/mo",
    posted: "Today",
    description:
      "Learn by building APIs, working with databases and helping improve reliable backend services.",
    initials: "C",
    color: "#e2edf7",
    featured: false,
    responsibilities: [
      "Develop and test backend APIs.",
      "Work with databases and data validation.",
      "Help improve application reliability and performance.",
    ],
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Git"],
  },
  {
    id: 6,
    title: "Business Development Executive",
    company: "Elevate Partners",
    location: "Mumbai",
    type: "Full-time",
    category: "Business",
    experience: "Mid level",
    salary: "₹5–8 LPA",
    posted: "5 days ago",
    description:
      "Build client relationships, identify new opportunities and help a growing team reach new markets.",
    initials: "E",
    color: "#f8efd5",
    featured: false,
    responsibilities: [
      "Identify potential customers and business opportunities.",
      "Maintain client relationships and communication.",
      "Support sales goals and business growth.",
    ],
    skills: ["Communication", "Negotiation", "Research", "Sales"],
  },
];

export function generateMetadata({ params }) {
  return params.then(({ id }) => {
    const job = jobsData.find((item) => item.id === Number(id));

    return {
      title: job ? `${job.title} at ${job.company}` : "Job Not Found",
      description: job?.description || "Explore career opportunities on Surhires.",
    };
  });
}

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const job = jobsData.find((item) => item.id === Number(id));

  if (!job) notFound();

  return (
    <main className="job-detail-page">
      <div className="job-detail-container">
        <Link href="/jobs" className="job-detail-back">
          <ArrowLeft size={17} />
          Back to all jobs
        </Link>

        <section className="job-detail-card">
          <div className="job-detail-heading">
            <div
              className="job-detail-logo"
              style={{ backgroundColor: job.color }}
            >
              {job.initials}
            </div>

            <div className="job-detail-title">
              <div className="job-detail-tags">
                {job.featured && (
                  <span className="job-detail-featured">
                    <Sparkles size={13} /> Featured
                  </span>
                )}
                <span>{job.type}</span>
              </div>

              <h1>{job.title}</h1>
              <p>{job.company}</p>
            </div>
          </div>

          <div className="job-detail-meta">
            <span><MapPin size={17} /> {job.location}</span>
            <span><BriefcaseBusiness size={17} /> {job.experience}</span>
            <span><Clock3 size={17} /> {job.posted}</span>
            <span><Building2 size={17} /> {job.category}</span>
          </div>

          <div className="job-detail-salary">
            <span>Estimated salary</span>
            <strong>{job.salary}</strong>
          </div>

          <div className="job-detail-section">
            <h2>About this role</h2>
            <p>{job.description}</p>
          </div>

          <div className="job-detail-section">
            <h2>What you will do</h2>
            <ul className="job-detail-responsibilities">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="job-detail-section">
            <h2>Skills and qualifications</h2>
            <div className="job-detail-skills">
              {job.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="job-detail-apply">
            <div>
              <strong>Interested in this opportunity?</strong>
              <p>This is a sample listing created for the Surhires preview.</p>
            </div>
            <Link href="/jobs" className="job-detail-apply-button">
              Explore more jobs <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
