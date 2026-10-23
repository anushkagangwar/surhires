
import Link from "next/link";
import {
  ArrowRight,
  Search,
  MapPin,
  BriefcaseBusiness,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const jobs = [
  {
    role: "Frontend Developer",
    company: "PixelCraft Studio",
    location: "Remote",
    type: "Full-time",
    salary: "₹6–10 LPA",
    initials: "P",
    color: "#e4e9ff",
  },
  {
    role: "Product Designer",
    company: "Northstar Digital",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "₹8–12 LPA",
    initials: "N",
    color: "#dff4eb",
  },
  {
    role: "MERN Stack Developer",
    company: "LaunchLayer",
    location: "Hybrid",
    type: "Internship",
    salary: "₹15k–25k/mo",
    initials: "L",
    color: "#fcebd9",
  },
];

const categories = [
  { name: "Engineering", count: "1,240+ jobs", icon: "01" },
  { name: "Design & Creative", count: "860+ jobs", icon: "02" },
  { name: "Marketing", count: "720+ jobs", icon: "03" },
  { name: "Business & Sales", count: "940+ jobs", icon: "04" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Work that
              <br />
              moves you <span>forward.</span>
            </h1>

            <p className="hero-description">
              Find opportunities that match your ambition. Meet companies
              that value your potential. Build a career that feels like yours.
            </p>

            <form action="/jobs" method="GET" className="search-panel">
              <label className="search-field">
                <Search size={20} />
                <input
                  type="search"
                  name="q"
                  placeholder="Job title, skill or company"
                  aria-label="Search jobs by title, skill or company"
                />
              </label>

              <div className="search-divider" />

              <label className="search-field location-field">
                <MapPin size={20} />
                <input
                  type="text"
                  name="location"
                  placeholder="City or remote"
                  aria-label="Job location"
                />
              </label>

              <button className="button button-primary search-button" type="submit">
                Find jobs <ArrowRight size={17} />
              </button>
            </form>

            <div className="popular-searches">
              <span>Popular:</span>
              <Link href="/jobs?q=Frontend">Frontend</Link>
              <Link href="/jobs?q=Product+Design">Product Design</Link>
              <Link href="/jobs?q=Internship">Internships</Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Career opportunities illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-note note-top">
              <span className="note-icon"><TrendingUp size={19} /></span>
              <span>
                <strong>New opportunities</strong>
                <small>Made for your next move</small>
              </span>
            </div>

            <div className="visual-card main-visual-card">
              <div className="visual-card-top">
                <div>
                  <span className="mini-label">YOUR CAREER, REIMAGINED</span>
                  <h2>Find your<br />kind of work.</h2>
                </div>
                <div className="visual-sparkle">✳</div>
              </div>

              <div className="visual-profile">
                <div className="profile-avatar">S</div>
                <div>
                  <strong>Your next opportunity</strong>
                  <p>One great move can change everything.</p>
                </div>
              </div>

              <div className="visual-progress">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="visual-progress-label">
                <span>Your journey starts here</span>
                <strong>01 / ∞</strong>
              </div>
            </div>

            <div className="visual-note note-bottom">
              <div className="avatar-stack">
                <span>A</span><span>R</span><span>M</span>
              </div>
              <span>
                <strong>People. Potential. Possibility.</strong>
                <small>Bring your next chapter to life.</small>
              </span>
            </div>

            <div className="visual-decoration decoration-one">✳</div>
            <div className="visual-decoration decoration-two">✦</div>
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>LESS SCROLLING. MORE POSSIBILITY.</span>
          <span>FIND YOUR NEXT CHAPTER <ArrowRight size={14} /></span>
        </div>
      </section>

      <section className="trust-strip">
        <p>BUILT FOR PEOPLE READY FOR WHAT'S NEXT</p>
        <div className="trust-items">
          <span><CheckCircle2 size={17} /> Opportunities for every stage</span>
          <span><CheckCircle2 size={17} /> Companies worth growing with</span>
          <span><CheckCircle2 size={17} /> A clearer path forward</span>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">HANDPICKED FOR YOUR NEXT MOVE</span>
            <h2>Opportunities worth <span>exploring.</span></h2>
            <p>A starting point for the work you want to do next.</p>
          </div>
          <Link href="/jobs" className="text-link">
            Explore all jobs <ArrowRight size={17} />
          </Link>
        </div>

        <div className="job-grid">
          {jobs.map((job) => (
            <article className="job-card" key={job.role}>
              <div className="job-card-top">
                <div
                  className="company-mark"
                  style={{ backgroundColor: job.color }}
                  aria-hidden="true"
                >
                  {job.initials}
                </div>
                <button className="save-job" type="button" aria-label={`Save ${job.role}`}>
                  ♡
                </button>
              </div>

              <span className="job-type">{job.type}</span>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>

              <div className="job-meta">
                <span><MapPin size={15} /> {job.location}</span>
                <span><Clock3 size={15} /> Just added</span>
              </div>

              <div className="job-card-bottom">
                <strong>{job.salary}</strong>
                <Link href={`/jobs?q=${encodeURIComponent(job.role)}`} aria-label={`Explore ${job.role} jobs`}>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="demo-disclaimer">
          These listings are sample content for the website preview.
        </p>
      </section>

      <section className="section category-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">START WITH WHAT YOU LOVE</span>
            <h2>Find your <span>field.</span></h2>
            <p>Explore roles by the work that gets you excited.</p>
          </div>
          <Link href="/jobs" className="text-link">
            Browse categories <ArrowRight size={17} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              href={`/jobs?q=${encodeURIComponent(category.name)}`}
              className="category-card"
              key={category.name}
            >
              <span className="category-number">{category.icon}</span>
              <span className="category-icon"><BriefcaseBusiness size={22} /></span>
              <h3>{category.name}</h3>
              <p>{category.count}</p>
              <span className="category-arrow"><ArrowRight size={18} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="career-cta-section">
        <div className="career-cta">
          <div className="cta-decoration">✳</div>
          <span className="section-kicker">FOR THE PEOPLE BUILDING WHAT'S NEXT</span>
          <h2>Your next great hire<br />could be <span>one click away.</span></h2>
          <p>
            Meet motivated people, discover fresh perspectives, and find the
            talent your team needs to move forward.
          </p>
          <Link href="/employers" className="button button-light">
            Explore hiring solutions <ArrowRight size={17} />
          </Link>
        </div>
        <div className="cta-side">
          <div className="cta-side-icon"><Users size={25} /></div>
          <h3>Great teams start with great people.</h3>
          <p>Make your next connection count.</p>
          <Building2 size={70} className="cta-building-icon" strokeWidth={1} />
        </div>
      </section>
    </main>
  );
}
