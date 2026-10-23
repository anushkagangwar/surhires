
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Clock3,
  CheckCircle2,
  BriefcaseBusiness,
  Building2,
  TrendingUp,
  Search,
  Send,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Reach the right people",
    description:
      "Connect with candidates whose skills and ambitions match your open roles.",
  },
  {
    icon: Clock3,
    title: "Make hiring simpler",
    description:
      "Present your opportunities clearly and help candidates discover the right fit.",
  },
  {
    icon: TrendingUp,
    title: "Grow your team",
    description:
      "Build a stronger team by bringing fresh skills and perspectives together.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share your opening",
    description: "Tell candidates about the role, skills and experience you need.",
  },
  {
    number: "02",
    title: "Discover talent",
    description: "Help relevant candidates understand your opportunity.",
  },
  {
    number: "03",
    title: "Make your connection",
    description: "Review applications and move forward with promising candidates.",
  },
];


const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "For small teams hiring for their first role.",
    features: [
      "1 job listing",
      "Basic job details",
      "Candidate-friendly job page",
      "Standard listing support",
    ],
    button: "Start for free",
    featured: false,
  },
  {
    name: "Growth",
    price: "₹2,999",
    period: "/ job",
    description: "For growing teams ready to reach more candidates.",
    features: [
      "Up to 5 job listings",
      "Featured job placement",
      "Enhanced job visibility",
      "Priority listing support",
    ],
    button: "Choose Growth",
    featured: true,
  },
  {
    name: "Scale",
    price: "Let's talk",
    description: "For organisations hiring across multiple teams.",
    features: [
      "Multiple job listings",
      "Custom hiring requirements",
      "Dedicated support",
      "Flexible hiring solutions",
    ],
    button: "Contact our team",
    featured: false,
  },
];


export default function EmployersPage() {
  const [form, setForm] = useState({
    company: "",
    title: "",
    location: "",
    type: "Full-time",
    salary: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!form.company.trim()) newErrors.company = "Enter your company name.";
    if (!form.title.trim()) newErrors.title = "Enter the job title.";
    if (!form.location.trim()) newErrors.location = "Enter the job location.";

    if (!form.email.trim()) {
      newErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (form.description.trim().length < 20) {
      newErrors.description =
        "Description must contain at least 20 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm({
      company: "",
      title: "",
      location: "",
      type: "Full-time",
      salary: "",
      email: "",
      description: "",
    });
  }

  return (
    <main className="employers-page">
      {/* HERO */}
      <section className="employers-hero">
        <div className="employers-hero-inner">
          <div className="employers-hero-copy">
            <div className="employers-eyebrow">
              <span />
              FOR TEAMS BUILDING THE FUTURE
            </div>

            <h1>
              Great people.
              <br />
              <span>Greater possibilities.</span>
            </h1>

            <p>
              Find the people who move your business forward. Discover talent,
              share opportunities and build a team ready for what comes next.
            </p>

            <div className="employers-hero-actions">
              <a href="#post-job" className="employers-primary-button">
                Post a job <ArrowRight size={18} />
              </a>

              <a href="#how-it-works" className="employers-secondary-button">
                Explore how it works
              </a>
            </div>

            <div className="employers-trust-points">
              <span>
                <CheckCircle2 size={17} /> Simple hiring process
              </span>
              <span>
                <CheckCircle2 size={17} /> Opportunities for every team
              </span>
            </div>
          </div>

          <div className="employers-hero-visual">
            <div className="employers-visual-orbit" />

            <div className="employers-dashboard-card">
              <div className="employers-dashboard-heading">
                <div>
                  <span className="employers-mini-label">YOUR NEXT CHAPTER</span>
                  <h2>Build your dream team.</h2>
                </div>
                <div className="employers-dashboard-icon">
                  <Building2 size={23} />
                </div>
              </div>

              <div className="employers-talent-card">
                <div className="employers-talent-avatar avatar-teal">A</div>
                <div>
                  <strong>Discover fresh talent</strong>
                  <p>Skills that move teams forward</p>
                </div>
                <CheckCircle2 size={19} />
              </div>

              <div className="employers-talent-card">
                <div className="employers-talent-avatar avatar-gold">M</div>
                <div>
                  <strong>Find your next teammate</strong>
                  <p>Make meaningful connections</p>
                </div>
                <Users size={19} />
              </div>

              <div className="employers-dashboard-footer">
                <span>
                  <span className="employers-status-dot" />
                  Your next great hire starts here
                </span>
                <ArrowRight size={19} />
              </div>
            </div>

            <div className="employers-floating-note">
              <div className="employers-floating-icon">
                <TrendingUp size={20} />
              </div>
              <div>
                <strong>Think beyond the resume.</strong>
                <p>Find potential. Build possibilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="employers-benefits section">
        <div className="employers-section-heading">
          <span className="employers-section-kicker">HIRING, WITH PURPOSE</span>
          <h2>
            Better connections.
            <br />
            <span>Stronger teams.</span>
          </h2>
          <p>
            Make every hiring step more focused on the people behind the
            potential.
          </p>
        </div>

        <div className="employers-benefit-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="employers-benefit-card" key={benefit.title}>
                <div className="employers-benefit-icon">
                  <Icon size={25} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <span className="employers-benefit-arrow">
                  <ArrowRight size={19} />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="employers-process" id="how-it-works">
        <div className="employers-process-inner">
          <div className="employers-section-heading">
            <span className="employers-section-kicker">A CLEARER WAY FORWARD</span>
            <h2>
              From opening to
              <br />
              <span>opportunity.</span>
            </h2>
            <p>
              A simple starting point for teams looking for their next great
              teammate.
            </p>
          </div>

          <div className="employers-steps-grid">
            {steps.map((step) => (
              <article className="employers-step" key={step.number}>
                <span className="employers-step-number">{step.number}</span>
                <div className="employers-step-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      
{/* PRICING PLANS */}
<section className="employers-pricing section" id="pricing">
  <div className="employers-section-heading">
    <span className="employers-section-kicker">
      SIMPLE, FLEXIBLE OPTIONS
    </span>
    <h2>
      A plan for every
      <br />
      <span>hiring journey.</span>
    </h2>
    <p>
      Choose a starting point that fits your team and hiring goals.
    </p>
  </div>

  <div className="employers-pricing-grid">
    {pricingPlans.map((plan) => (
      <article
        className={`employers-pricing-card ${
          plan.featured ? "employers-pricing-featured" : ""
        }`}
        key={plan.name}
      >
        {plan.featured && (
          <span className="employers-pricing-badge">
            Recommended
          </span>
        )}

        <h3>{plan.name}</h3>
        <p className="employers-pricing-description">
          {plan.description}
        </p>

        <div className="employers-pricing-price">
          <strong>{plan.price}</strong>
          {plan.period && <span>{plan.period}</span>}
        </div>

        <div className="employers-pricing-divider" />

        <p className="employers-pricing-includes">
          What's included
        </p>

        <ul>
          {plan.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={17} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={
            plan.name === "Scale"
              ? "mailto:hello@surhires.com?subject=Surhires%20Scale%20Plan"
              : "#post-job"
          }
          className={
            plan.featured
              ? "employers-pricing-button employers-pricing-button-primary"
              : "employers-pricing-button"
          }
        >
          {plan.button}
          <ArrowRight size={17} />
        </a>
      </article>
    ))}
  </div>

  <p className="employers-pricing-note">
    Sample pricing for demonstration purposes. Plans are not currently
    available for purchase.
  </p>
</section>


      {/* JOB POSTING FORM */}
      <section className="employers-form-section" id="post-job">
        <div className="employers-form-intro">
          <span className="employers-section-kicker">YOUR NEXT GREAT HIRE STARTS HERE</span>
          <h2>
            Have a role to fill?
            <br />
            <span>Let's get started.</span>
          </h2>
          <p>
            Share a few details about your opening. Complete the form to
            preview a job submission.
          </p>

          <div className="employers-form-points">
            <div>
              <ShieldCheck size={21} />
              <span>
                <strong>Clear and structured</strong>
                <small>Keep your job details organised.</small>
              </span>
            </div>
            <div>
              <Search size={21} />
              <span>
                <strong>Designed for discovery</strong>
                <small>Help candidates understand your role.</small>
              </span>
            </div>
            <div>
              <BriefcaseBusiness size={21} />
              <span>
                <strong>Made for growing teams</strong>
                <small>Start with the opportunity you need to fill.</small>
              </span>
            </div>
          </div>
        </div>

        <form className="employers-job-form" onSubmit={handleSubmit} noValidate>
          <div className="employers-form-heading">
            <div className="employers-form-heading-icon">
              <Send size={21} />
            </div>
            <div>
              <h3>Job details</h3>
              <p>Fields marked * are required.</p>
            </div>
          </div>

          {submitted && (
            <div className="employers-success-message" role="status">
              <CheckCircle2 size={21} />
              <div>
                <strong>Form validated successfully!</strong>
                <p>
                  This is a demo submission. Connect a backend to save job
                  listings and notify employers.
                </p>
              </div>
            </div>
          )}

          <div className="employers-form-grid">
            <label className="employers-form-field">
              Company name *
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. Surhires Technologies"
                aria-invalid={Boolean(errors.company)}
              />
              {errors.company && (
                <small className="employers-field-error">{errors.company}</small>
              )}
            </label>

            <label className="employers-form-field">
              Job title *
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                aria-invalid={Boolean(errors.title)}
              />
              {errors.title && (
                <small className="employers-field-error">{errors.title}</small>
              )}
            </label>

            <label className="employers-form-field">
              Location *
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Remote, Kanpur"
                aria-invalid={Boolean(errors.location)}
              />
              {errors.location && (
                <small className="employers-field-error">{errors.location}</small>
              )}
            </label>

            <label className="employers-form-field">
              Employment type *
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </label>

            <label className="employers-form-field">
              Salary range
              <input
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="e.g. ₹5–8 LPA"
              />
            </label>

            <label className="employers-form-field">
              Contact email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hiring@company.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <small className="employers-field-error">{errors.email}</small>
              )}
            </label>

            <label className="employers-form-field employers-form-field-full">
              Job description *
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe the role, responsibilities, skills and experience required..."
                aria-invalid={Boolean(errors.description)}
              />
              <span className="employers-character-count">
                {form.description.length} characters · Minimum 20
              </span>
              {errors.description && (
                <small className="employers-field-error">
                  {errors.description}
                </small>
              )}
            </label>
          </div>

          <button className="employers-submit-button" type="submit">
            Validate job submission <ArrowRight size={18} />
          </button>

          <p className="employers-form-disclaimer">
            Demo only: your information is not stored or sent to a server.
          </p>
        </form>
      </section>

      {/* FINAL CTA */}
      <section className="employers-final-cta">
        <div>
          <span className="employers-section-kicker">THE RIGHT PEOPLE CHANGE EVERYTHING</span>
          <h2>
            Your next chapter
            <br />
            starts with <span>your team.</span>
          </h2>
          <p>Explore opportunities or return to discover the Surhires experience.</p>
        </div>
        <div className="employers-final-actions">
          <a href="#post-job" className="employers-primary-button">
            Post a job <ArrowRight size={18} />
          </a>
          <Link href="/jobs" className="employers-secondary-button">
            Explore jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
