import Image from "next/image";
import Nav from "../../components/Nav";
import Icon from "../../components/Icon";
import WorkGrid from "../../components/WorkGrid";
import CopyButton from "../../components/CopyButton";
import LogFeed from "../../components/LogFeed";
import { capabilities, packages, profile } from "../../data/portfolio";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.nishkumar.dev/#person",
                name: profile.name,
                url: "https://www.nishkumar.dev/",
                jobTitle: "Software Developer",
                sameAs: [profile.github, profile.linkedin, profile.npm],
                knowsAbout: [
                  "Web development",
                  "React",
                  "Next.js",
                  "Browser extensions",
                  ".NET",
                ],
                subjectOf: [
                  { "@type": "WebSite", name: "Demo Lab", url: profile.demos },
                  {
                    "@type": "WebSite",
                    name: "Nish Extensions",
                    url: profile.extensions,
                  },
                ],
              },
              {
                "@type": "ProfilePage",
                "@id": "https://www.nishkumar.dev/#profile",
                url: "https://www.nishkumar.dev/",
                name: "Nitish Kumar M | Web Developer & Freelance Website Design",
                mainEntity: { "@id": "https://www.nishkumar.dev/#person" },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <section
          className="hero container"
          id="hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-intro">
            <p className="availability">
              <span />
              Open to projects & opportunities
            </p>
            <p className="hero-location">
              A little studio of one / Bengaluru, India
            </p>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                Ideas into
                <br />
                interfaces<span className="hero-period">.</span>
              </h1>
              <p className="hero-description">
                I’m Nitish. I design thoughtful websites and build useful
                software, from the first pixel to the code behind it.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">
                  Explore my work <Icon name="down" />
                </a>
                <a className="text-link" href="#contact">
                  Have a project in mind? <Icon />
                </a>
              </div>
            </div>
            <div
              className="hero-stage"
              aria-label="A preview of my design and development work"
            >
              <span className="clay-sticker" aria-hidden="true">
                Designed.
                <br />
                Developed.
                <br />
                By me.
              </span>
              <svg
                className="clay-spark"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <path
                  d="m60 12 12 27 28-11-11 28 27 12-29 9 9 29-27-15-17 25-4-31-31 3 19-25-22-21 31 1Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                className="hero-preview"
                href={profile.demos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Northline and the other Demo Lab websites"
              >
                <div className="browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>Northline / Demo Lab</span>
                  <Icon />
                </div>
                <Image
                  src="/work/northline.webp"
                  alt="Northline, my dance studio website concept"
                  width={1440}
                  height={1000}
                  sizes="(max-width: 700px) 85vw, 43vw"
                  priority
                />
              </a>
              <span className="clay-key" aria-hidden="true">
                <Icon name="code" />
                <small>made to work</small>
              </span>
              <a
                className="hero-tool"
                href={`${profile.extensions}/extensions/text-extractor`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tool-icon" aria-hidden="true">
                  Aa<span>↗</span>
                </span>
                <div>
                  <span className="tool-label">A little tool I’m building</span>
                  <strong>Text Extractor</strong>
                  <span className="tool-status">In store review</span>
                </div>
                <Icon />
              </a>
              <span className="stage-caption">
                A bit of design. A lot of making.
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Good on the surface. Solid underneath.</span>
            <div>
              <span>React & Next.js</span>
              <span>Browser extensions</span>
              <span>.NET & Node.js</span>
            </div>
            <a href={profile.resume} download="Nitish_Kumar_Resume.pdf">
              Download résumé <Icon name="down" />
            </a>
          </div>
        </section>

        <section
          className="work-section container section-space"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="projects-heading">
                Different problems.
                <br />
                Same attention to detail.
              </h2>
            </div>
            <p>
              A look at what I make: expressive websites, useful browser tools,
              and applications with a clear purpose.
            </p>
          </div>
          <WorkGrid />
          <nav
            className="explore-sites"
            aria-label="Explore my websites and extensions"
          >
            <div>
              <p>Websites for different worlds</p>
              <h3>
                <a
                  href={profile.demos}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Demo Lab <Icon />
                </a>
              </h3>
              <div>
                <a
                  href={`${profile.demos}/dance-studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dance studio
                </a>
                <a
                  href={`${profile.demos}/ai-saas`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI SaaS
                </a>
                <a
                  href={`${profile.demos}/restaurant`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant
                </a>
              </div>
            </div>
            <div>
              <p>Useful tools, made by me</p>
              <h3>
                <a
                  href={profile.extensions}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Extensions <Icon />
                </a>
              </h3>
              <div>
                <a
                  href={`${profile.extensions}/extensions/text-extractor`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Text Extractor <small>In review</small>
                </a>
                <a
                  href={`${profile.extensions}/extensions/pure-anime`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pure Anime <small>Coming soon</small>
                </a>
              </div>
            </div>
          </nav>
          <div className="work-end">
            <span>There’s more behind the scenes.</span>
            <a
              className="text-link"
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore all repositories <Icon />
            </a>
          </div>
        </section>

        <section
          className="capabilities-section"
          id="skills"
          aria-labelledby="skills-heading"
        >
          <div className="container capabilities-layout">
            <div className="capabilities-heading">
              <p className="section-label">What I bring</p>
              <h2 id="skills-heading">
                A designer’s eye.
                <br />A developer’s
                <br />
                way of thinking.
              </h2>
              <p>
                I connect how an experience looks with how it works. One person,
                thinking through the details on both sides.
              </p>
              <a className="text-link" href="#contact">
                Let’s find the right approach <Icon />
              </a>
            </div>
            <div className="capabilities-list">
              {capabilities.map((capability, index) => (
                <details key={capability.title} open={index === 0}>
                  <summary>
                    <Icon
                      name={
                        index === 0 ? "grid" : index === 1 ? "window" : "code"
                      }
                    />
                    <h3>{capability.title}</h3>
                    <span className="disclosure-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="capability-body">
                    <p>{capability.detail}</p>
                    <p className="deliverables">{capability.deliverables}</p>
                    <div className="capability-tools">
                      {capability.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="packages-section container section-space"
          aria-labelledby="packages-heading"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">Built to be shared</p>
              <h2 id="packages-heading">
                Small packages.
                <br />
                Less starting from scratch.
              </h2>
            </div>
            <a
              className="text-link"
              href={profile.npm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on npm <Icon />
            </a>
          </div>
          <div className="package-grid">
            {packages.map((pkg) => (
              <article className="package-card" key={pkg.name}>
                <div className="package-top">
                  <span className="npm-mark">npm</span>
                  <span>Public package</span>
                  <a
                    href={pkg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${pkg.name} on npm`}
                  >
                    <Icon />
                  </a>
                </div>
                <h3>
                  <a href={pkg.href} target="_blank" rel="noopener noreferrer">
                    {pkg.name}
                  </a>
                </h3>
                <p>{pkg.description}</p>
                <div className="package-tags">
                  {pkg.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="install-command">
                  <code>{pkg.command}</code>
                  <CopyButton text={pkg.command} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section container section-space"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="about-identity">
            <div className="identity-top">
              <span>A little about the maker</span>
              <span aria-hidden="true">↘</span>
            </div>
            <div className="identity-monogram" aria-hidden="true">
              nk<span>.</span>
            </div>
            <div className="identity-bottom">
              <strong>{profile.name}</strong>
              <span>
                Software developer
                <br />
                {profile.location}
              </span>
            </div>
          </div>
          <div className="about-copy">
            <p className="section-label">Hello, I’m Nitish</p>
            <h2 id="about-heading">
              Curious by nature.
              <br />A builder by choice.
            </h2>
            <p>
              I’m a software developer based in Bengaluru. I like the part where
              an idea stops being a sketch and becomes something you can
              actually use.
            </p>
            <p>
              My work moves between React interfaces, browser extensions,
              Node.js packages, and .NET applications. I enjoy understanding the
              whole system, then making the part people use feel simple.
            </p>
            <p>
              Outside a project, you’ll usually find me exploring native APIs,
              practising data structures, or following a small idea further than
              I originally planned.
            </p>
            <div className="about-links">
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Icon />
              </a>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Icon />
              </a>
              <a
                className="text-link"
                href={profile.resume}
                download="Nitish_Kumar_Resume.pdf"
              >
                My résumé <Icon name="down" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="notes-section"
          id="logs"
          aria-labelledby="logs-heading"
        >
          <div className="container section-space">
            <LogFeed />
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="contact-top">
              <p className="availability">
                <span />
                Open to the right next thing
              </p>
              <span>Freelance / Full-time / Collaborations</span>
            </div>
            <div className="contact-layout">
              <h2 id="contact-heading">
                Let’s make
                <br />
                something
                <br />
                worth opening.
              </h2>
              <div className="contact-copy">
                <p>
                  A website for your business, a tool you wish existed, or a
                  team I could contribute to. Tell me what you have in mind.
                </p>
                <a
                  className="button button-light"
                  href={`mailto:${profile.email}?subject=Let%27s%20build%20something`}
                >
                  Start a conversation <Icon />
                </a>
                <div className="contact-email">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <CopyButton text={profile.email} label="Copy email" />
                </div>
                <a
                  className="contact-linkedin"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prefer LinkedIn? Find me here <Icon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#hero" aria-label="Back to top">
          nish<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}
          <br />
          <span>Made with care in Bengaluru.</span>
        </p>
        <nav aria-label="More by Nitish">
          <a href={profile.demos} target="_blank" rel="noopener noreferrer">
            Demo Lab <Icon />
          </a>
          <a
            href={profile.extensions}
            target="_blank"
            rel="noopener noreferrer"
          >
            Extensions <Icon />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <Icon />
          </a>
        </nav>
        <a className="back-top" href="#hero" aria-label="Back to top">
          <Icon name="down" />
        </a>
      </footer>
    </>
  );
}
