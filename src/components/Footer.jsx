
import Link from "next/link";
import { BriefcaseBusiness, Camera, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="brand-icon">
                <BriefcaseBusiness size={22} />
              </span>
              <span>Sur<span>hires</span></span>
            </Link>
            <p>
              Better hires. Brighter futures. Connecting ambitious people
              with companies building what comes next.
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <BriefcaseBusiness size={18} />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <Camera size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>For Job Seekers</h3>
            <Link href="/jobs">Browse Jobs</Link>
            <Link href="/jobs">Explore Careers</Link>
            <Link href="/jobs">Find Opportunities</Link>
          </div>

          <div className="footer-column">
            <h3>For Employers</h3>
            <Link href="/employers">Post a Job</Link>
            <Link href="/employers#pricing">Pricing Plans</Link>
            <Link href="/employers#post-job">Hire Talent</Link>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link href="/">About Surhires</Link>
            <a href="/#how-it-works">How It Works</a>
            <a href="mailto:hello@surhires.example">
              Contact Us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Surhires. All rights reserved.</p>
          <p>Built for better career connections.</p>
        </div>
      </div>
    </footer>
  );
}
