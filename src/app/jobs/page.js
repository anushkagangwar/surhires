
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  ArrowRight,
  SlidersHorizontal,
  Bookmark,
  Building2,
  X,
  ChevronDown,
  Sparkles,
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
  },
];

const jobTypes = ["Full-time", "Internship", "Contract", "Part-time"];
const categories = ["Engineering", "Design", "Marketing", "Business"];
const experiences = ["Entry level", "Mid level", "Senior level"];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [savedJobs, setSavedJobs] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();
    const place = location.trim().toLowerCase();

    let result = jobsData.filter((job) => {
      const matchesSearch =
        !query ||
        [job.title, job.company, job.category, job.description]
          .some((value) => value.toLowerCase().includes(query));

      const matchesLocation =
        !place ||
        job.location.toLowerCase().includes(place) ||
        (place.includes("remote") && job.location === "Remote");

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(job.type);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(job.category);

      const matchesExperience =
        selectedExperiences.length === 0 ||
        selectedExperiences.includes(job.experience);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesCategory &&
        matchesExperience
      );
    });

    if (sortBy === "featured") {
      result = [...result].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [
    search,
    location,
    selectedTypes,
    selectedCategories,
    selectedExperiences,
    sortBy,
  ]);

  function toggleFilter(value, selected, setSelected) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  }

  function clearFilters() {
    setSearch("");
    setLocation("");
    setSelectedTypes([]);
    setSelectedCategories([]);
    setSelectedExperiences([]);
    setSortBy("latest");
  }

  function toggleSaved(id) {
    setSavedJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  }

  function FilterGroup({ title, options, selected, setSelected }) {
    return (
      <div className="jobs-filter-group">
        <h3>{title}</h3>
        {options.map((option) => (
          <label className="jobs-checkbox" key={option}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() =>
                toggleFilter(option, selected, setSelected)
              }
            />
            <span className="custom-checkbox" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    );
  }

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-hero-inner">
          <div className="jobs-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Find jobs</span>
          </div>

          <div className="jobs-hero-copy">
            <span className="jobs-eyebrow">
              <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h1>
              Find work that
              <br />
              <span>moves you forward.</span>
            </h1>
            <p>
              Explore opportunities built around your skills, your ambitions,
              and the future you want to create.
            </p>
          </div>

          <form
            className="jobs-search-bar"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="jobs-search-input">
              <Search size={20} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Job title, skill or company"
                aria-label="Search by job title, skill or company"
              />
            </label>

            <div className="jobs-search-divider" />

            <label className="jobs-search-input">
              <MapPin size={20} />
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or remote"
                aria-label="Filter by location"
              />
            </label>

            <button type="submit" className="jobs-search-button">
              Search jobs <ArrowRight size={17} />
            </button>
          </form>

          <div className="jobs-quick-stats">
            <span><BriefcaseBusiness size={16} /> Curated opportunities</span>
            <span><Building2 size={16} /> Discover new companies</span>
            <span><Sparkles size={16} /> Find your next move</span>
          </div>
        </div>
      </section>

      <section className="jobs-content-section">
        <div className="jobs-content-inner">
          <div className="jobs-page-heading">
            <div>
              <span className="jobs-section-kicker">EXPLORE POSSIBILITIES</span>
              <h2>Opportunities for you.</h2>
              <p>Find a role that fits where you want to go.</p>
            </div>

            <button
              type="button"
              className="jobs-mobile-filter-button"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal size={17} /> Filters
            </button>
          </div>

          <div className="jobs-layout">
            <aside
              className={`jobs-sidebar ${mobileFiltersOpen ? "jobs-sidebar-open" : ""}`}
            >
              <div className="jobs-sidebar-heading">
                <div>
                  <SlidersHorizontal size={18} />
                  <h2>Filters</h2>
                </div>
                <button
                  type="button"
                  className="jobs-close-filters"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filters"
                >
                  <X size={19} />
                </button>
              </div>

              <button
                type="button"
                className="jobs-clear-filters"
                onClick={clearFilters}
              >
                Clear all
              </button>

              <FilterGroup
                title="Job type"
                options={jobTypes}
                selected={selectedTypes}
                setSelected={setSelectedTypes}
              />

              <FilterGroup
                title="Department"
                options={categories}
                selected={selectedCategories}
                setSelected={setSelectedCategories}
              />

              <FilterGroup
                title="Experience level"
                options={experiences}
                selected={selectedExperiences}
                setSelected={setSelectedExperiences}
              />

              <div className="jobs-sidebar-note">
                <Sparkles size={19} />
                <strong>Your next move matters.</strong>
                <p>Explore roles, discover teams, and keep growing.</p>
              </div>

              <button
                type="button"
                className="jobs-apply-filters"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Show {filteredJobs.length} jobs
              </button>
            </aside>

            {mobileFiltersOpen && (
              <button
                type="button"
                className="jobs-filter-backdrop"
                aria-label="Close filters"
                onClick={() => setMobileFiltersOpen(false)}
              />
            )}

            <div className="jobs-results">
              <div className="jobs-results-toolbar">
                <div>
                  <h3>
                    {filteredJobs.length}{" "}
                    {filteredJobs.length === 1 ? "opportunity" : "opportunities"}
                  </h3>
                  <p>Sample listings for the Surhires website preview</p>
                </div>

                <label className="jobs-sort-label">
                  <span>Sort by</span>
                  <span className="jobs-sort-control">
                    <select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      aria-label="Sort jobs"
                    >
                      <option value="latest">Latest</option>
                      <option value="featured">Featured first</option>
                    </select>
                    <ChevronDown size={15} />
                  </span>
                </label>
              </div>

              <div className="jobs-list">
                {filteredJobs.map((job, index) => (
                  <article
                    className="jobs-list-card"
                    key={job.id}
                    style={{ "--job-index": index }}
                  >
                    <div className="jobs-card-main">
                      <div
                        className="jobs-company-logo"
                        style={{ backgroundColor: job.color }}
                        aria-hidden="true"
                      >
                        {job.initials}
                      </div>

                      <div className="jobs-card-info">
                        <div className="jobs-card-tags">
                          {job.featured && (
                            <span className="jobs-featured-tag">
                              <Sparkles size={12} /> Featured
                            </span>
                          )}
                          <span className="jobs-type-tag">{job.type}</span>
                        </div>

                        <h3>{job.title}</h3>
                        <p className="jobs-company-name">{job.company}</p>

                        <div className="jobs-card-meta">
                          <span><MapPin size={15} /> {job.location}</span>
                          <span><BriefcaseBusiness size={15} /> {job.experience}</span>
                          <span><Clock3 size={15} /> {job.posted}</span>
                        </div>

                        <p className="jobs-description">{job.description}</p>
                      </div>

                      <button
                        type="button"
                        className={`jobs-save-button ${
                          savedJobs.includes(job.id) ? "jobs-saved" : ""
                        }`}
                        onClick={() => toggleSaved(job.id)}
                        aria-label={
                          savedJobs.includes(job.id)
                            ? `Unsave ${job.title}`
                            : `Save ${job.title}`
                        }
                        title={
                          savedJobs.includes(job.id)
                            ? "Remove saved job"
                            : "Save job"
                        }
                      >
                        <Bookmark
                          size={19}
                          fill={savedJobs.includes(job.id) ? "currentColor" : "none"}
                        />
                      </button>
                    </div>

                    <div className="jobs-card-footer">
                      <div>
                        <span className="jobs-salary-label">Estimated salary</span>
                        <strong>{job.salary}</strong>
                      </div>
                      
<Link
  href={`/jobs/${job.id}`}
  className="jobs-view-button"
>
  View details <ArrowRight size={16} />
</Link>

                    </div>
                  </article>
                ))}

                {filteredJobs.length === 0 && (
                  <div className="jobs-empty-state">
                    <div><Search size={26} /></div>
                    <h3>No matching jobs found</h3>
                    <p>
                      Try another keyword or remove a filter to see more
                      opportunities.
                    </p>
                    <button
                      type="button"
                      className="jobs-search-button"
                      onClick={clearFilters}
                    >
                      Clear filters <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="jobs-demo-notice">
                <Sparkles size={17} />
                <p>
                  <strong>Looking for your next opportunity?</strong>
                  These are illustrative listings created for this website
                  assignment, not verified live vacancies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
