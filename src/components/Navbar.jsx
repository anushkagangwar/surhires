
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BriefcaseBusiness, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <BriefcaseBusiness size={22} />
          </span>
          <span>Sur<span>hires</span></span>
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/jobs" onClick={closeMenu}>Find Jobs</Link>
          <Link href="/employers" onClick={closeMenu}>For Employers</Link>
          <a href="/#how-it-works" onClick={closeMenu}>How It Works</a>
          <Link
            href="/jobs"
            className="btn btn-dark nav-cta"
            onClick={closeMenu}
          >
            Explore Jobs <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
