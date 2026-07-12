import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import ScrollReveal from "./components/ScrollReveal";
import LogFeed from "./components/LogFeed";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section id="hero" aria-label="Introduction">
        <div className="hero-mesh" aria-hidden="true" />
        <div className="hero-ticker" aria-hidden="true" />

        <div className="hero-l">
          <p className="hero-eyebrow" aria-label="Status">
            <span className="avail-dot" aria-hidden="true" />
            Open to opportunities &nbsp;·&nbsp; Bengaluru, India
          </p>
          <h1 className="hero-name">
            Nitish
            <br />
            <span className="ghost">Kumar</span>
            <span className="accent">&thinsp;M</span>
          </h1>
          <p className="hero-bio">
            <strong>Software Developer</strong> building across the full stack —
            from <strong>npm packages &amp; Chrome extensions</strong> to{" "}
            <strong>.NET &amp; React</strong> applications. I care about clean
            APIs, great DX, and code that holds up.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-solid">
              View Projects →
            </a>
            <a
              href="https://github.com/NitishKumar078"
              target="_blank"
              rel="noopener"
              className="btn btn-line"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-kumar-m"
              target="_blank"
              rel="noopener"
              className="btn btn-line"
            >
              LinkedIn ↗
            </a>
            <a
              href="/nishkumar562_gmail_com.pdf"
              download="Nitish_Kumar_Resume.pdf"
              className="btn btn-glow"
            >
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-r" aria-label="Quick stats">
          {[
            { n: "19", l: "GitHub repos" },
            { n: "2", l: "npm packages" },
            { n: "4+", l: "Languages" },
            { n: "OSS", l: "Open source" },
          ].map((s) => (
            <div className="stat-block" key={s.l}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="hero-scroll" aria-hidden="true">
          scroll
        </div>
      </section>

      {/* ═══ ABOUT ═══════════════════════════════════════════════════ */}
      <section id="about" aria-labelledby="about-heading">
        <p className="tag" data-i="01">
          About
        </p>
        <h2 className="sec-h rv" id="about-heading">
          Who I am.
        </h2>

        <div className="about-grid">
          <div className="about-text rv">
            <p>
              I&apos;m <strong>Nitish Kumar M</strong>, a software developer
              from Bengaluru building across the stack. My work spans{" "}
              <strong>
                Node.js utilities, React frontends, .NET backends, and desktop
                tooling in C#
              </strong>{" "}
              — I pick the right tool, not the trendy one.
            </p>
            <p>
              I published{" "}
              <strong>
                <a
                  href="https://www.npmjs.com/package/favicon-extractor"
                  target="_blank"
                  rel="noopener"
                >
                  favicon-extractor
                </a>
              </strong>{" "}
              on npm — a backend-focused Node.js utility for fetching favicons
              at scale, with full TypeScript typings, ESM + CJS dual exports,
              and a live Vercel demo. It reflects how I think about DX: zero
              friction, type-safe, well-documented.
            </p>
            <p>
              I also build desktop tools. <strong>Spy</strong> is a C# / WPF
              application for real-time window capture and input monitoring —
              built with Win32 API hooks and zero external dependencies.
            </p>
            <p>
              Beyond code I focus on <strong>DSA</strong>, Chrome extension
              development, and exploring what web and native platforms can do
              together.
            </p>

            <div className="stack-cloud" role="list" aria-label="Technologies">
              {[
                "TypeScript",
                "JavaScript",
                "C#",
                "Python",
                "React",
                ".NET",
                "Node.js",
                "WPF",
                "Chrome Extensions",
                "DSA",
                "HTML / CSS",
                "Git",
              ].map((t) => (
                <span className="stack-pill" role="listitem" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="about-cards rv2">
            {[
              { label: "Location", val: "Bangalore, India 🇮🇳", href: null },
              {
                label: "Website",
                val: "nishkumar.dev ↗",
                href: "https://www.nishkumar.dev",
              },
              {
                label: "GitHub",
                val: "@NitishKumar078 ↗",
                href: "https://github.com/NitishKumar078",
              },
              {
                label: "LinkedIn",
                val: "nitish-kumar-m ↗",
                href: "https://www.linkedin.com/in/nitish-kumar-m",
              },
              {
                label: "npm Profile",
                val: "~nitish_kumar_m ↗",
                href: "https://www.npmjs.com/~nitish_kumar_m",
              },
              {
                label: "Focus areas",
                val: "DSA · .NET · React · Chrome Extensions",
                href: null,
                dim: true,
              },
            ].map((c) => (
              <div className="acard" key={c.label}>
                <div className="acard-label">{c.label}</div>
                <div
                  className="acard-val"
                  style={
                    c.dim
                      ? {
                          color: "var(--dim)",
                          fontSize: ".88rem",
                          fontWeight: 400,
                        }
                      : undefined
                  }
                >
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener">
                      {c.val}
                    </a>
                  ) : (
                    c.val
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ════════════════════════════════════════════════ */}
      <section id="projects" aria-labelledby="projects-heading">
        <p className="tag" data-i="02">
          Work
        </p>
        <h2 className="sec-h rv" id="projects-heading">
          Selected projects.
        </h2>

        <div className="proj-list" role="list">
          <article
            className="pcard"
            role="listitem"
            style={{ background: "var(--ink2)" }}
          >
            <div className="pcard-meta">
              <div className="pcard-idx" aria-hidden="true">
                01
              </div>
              <div className="pcard-lang ts">TS · React</div>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">MindMesh</h3>
              <p className="pcard-desc">
                A unified AI chat platform that lets users access OpenAI,
                Gemini, and Perplexity in one place. Just plug in your API key
                and switch between models instantly. One interface, endless
                intelligence.
              </p>
              <div className="pcard-chips">
                {["TypeScript", "React", "AI Integration", "LLM"].map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="pcard-actions">
              <a
                className="plink hi"
                href="https://github.com/NitishKumar078/MindMesh"
                target="_blank"
                rel="noopener"
              >
                GitHub →
              </a>
            </div>
          </article>

          <article className="pcard" role="listitem">
            <div className="pcard-meta">
              <div className="pcard-idx" aria-hidden="true">
                02
              </div>
              <div className="pcard-lang ts">TS · React</div>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">Invoice-Book</h3>
              <p className="pcard-desc">
                A software application built to seamlessly generate and manage
                invoices. Provides a clean and intuitive interface for tracking
                billing information and creating professional invoices
                efficiently.
              </p>
              <div className="pcard-chips">
                {["TypeScript", "React", "Web"].map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="pcard-actions">
              <a
                className="plink hi"
                href="https://github.com/NitishKumar078/Invoice-Book"
                target="_blank"
                rel="noopener"
              >
                GitHub →
              </a>
            </div>
          </article>

          <article className="pcard" role="listitem">
            <div className="pcard-meta">
              <div className="pcard-idx" aria-hidden="true">
                03
              </div>
              <div className="pcard-lang">C# · WPF</div>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">Spy</h3>
              <p className="pcard-desc">
                A Windows desktop utility for real-time window monitoring.
                Enumerates all active user processes, captures live screenshots
                of any selected window, and logs keyboard &amp; mouse actions
                with full timestamps — built in C# / WPF using low-level Win32
                API hooks. Zero external dependencies, just the platform.
              </p>
              <div className="pcard-chips">
                {["C#", "WPF", "XAML", "Win32 API", ".NET"].map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="pcard-actions">
              <a
                className="plink hi"
                href="https://github.com/NitishKumar078/Spy"
                target="_blank"
                rel="noopener"
              >
                GitHub →
              </a>
            </div>
          </article>

          <article className="pcard" role="listitem">
            <div className="pcard-meta">
              <div className="pcard-idx" aria-hidden="true">
                04
              </div>
              <div className="pcard-lang npm">npm Packages</div>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">NPM Publications</h3>
              <p className="pcard-desc">
                <strong>favicon-extractor:</strong> A lightweight Node.js
                utility to fetch and extract favicons from any website URL.
                Perfect for apps, extensions, or APIs.
                <br />
                <br />
                <strong>create-react-chrome-ext:</strong> A boilerplate setup
                for building Chrome extensions using React. Includes essential
                configurations to kickstart extension development.
              </p>
              <div className="pcard-chips">
                {["npm", "Node.js", "TypeScript", "React", "Chrome Ext."].map(
                  (c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="pcard-actions">
              <a
                className="plink hi"
                href="https://www.npmjs.com/package/favicon-extractor"
                target="_blank"
                rel="noopener"
              >
                favicon-extractor ↗
              </a>
              <a
                className="plink hi"
                href="https://www.npmjs.com/package/create-react-chrome-ext"
                target="_blank"
                rel="noopener"
              >
                create-react-chrome-ext ↗
              </a>
            </div>
          </article>

          <article className="pcard" role="listitem">
            <div className="pcard-meta">
              <div className="pcard-idx" aria-hidden="true">
                +15
              </div>
              <div className="pcard-lang ts">TS · C# · Py</div>
            </div>
            <div className="pcard-body">
              <h3 className="pcard-title">More on GitHub</h3>
              <p className="pcard-desc">
                19 public repositories spanning Chrome extensions, .NET
                projects, DSA practice, Python utilities, and more experiments.
                All open-source. Worth exploring if you want to see the full
                range.
              </p>
              <div className="pcard-chips">
                {[
                  "Chrome Extensions",
                  ".NET",
                  "Python",
                  "DSA",
                  "19 repos total",
                ].map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="pcard-actions">
              <a
                className="plink hi"
                href="https://github.com/NitishKumar078?tab=repositories"
                target="_blank"
                rel="noopener"
              >
                All Repos →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ SKILLS ══════════════════════════════════════════════════ */}
      <section id="skills" aria-labelledby="skills-heading">
        <p className="tag" data-i="03">
          Skills
        </p>
        <h2 className="sec-h rv" id="skills-heading">
          The toolkit.
        </h2>

        <div className="skills-wrap">
          <div className="skills-sidebar rv">
            <p>
              I work across languages and runtimes. These are honest assessments
              — tools I&apos;ve used to ship real things, not just follow
              tutorials.
            </p>
          </div>

          <div className="skill-groups rv2" id="skillroot">
            <div role="group" aria-label="Languages">
              <div className="sgroup-title">Languages</div>
              {[
                { name: "TypeScript", pct: 92, w: 0.92 },
                { name: "JavaScript", pct: 90, w: 0.9 },
                { name: "C#", pct: 76, w: 0.76 },
                { name: "Python", pct: 68, w: 0.68 },
                { name: "HTML / CSS", pct: 88, w: 0.88 },
              ].map((s) => (
                <div className="srow" key={s.name}>
                  <span className="sname">{s.name}</span>
                  <div
                    className="bbar"
                    role="progressbar"
                    aria-valuenow={s.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="bfill" data-w={s.w} />
                  </div>
                  <span className="spct">{s.pct}%</span>
                </div>
              ))}
            </div>

            <div role="group" aria-label="Frontend and extensions">
              <div className="sgroup-title">Frontend &amp; Extensions</div>
              {[
                { name: "React", pct: 85, w: 0.85 },
                { name: "Material UI", pct: 78, w: 0.78 },
                { name: "Chrome Ext.", pct: 72, w: 0.72 },
              ].map((s) => (
                <div className="srow" key={s.name}>
                  <span className="sname">{s.name}</span>
                  <div
                    className="bbar"
                    role="progressbar"
                    aria-valuenow={s.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="bfill" data-w={s.w} />
                  </div>
                  <span className="spct">{s.pct}%</span>
                </div>
              ))}
            </div>

            <div role="group" aria-label="Backend and desktop">
              <div className="sgroup-title">Backend &amp; Desktop</div>
              {[
                { name: "Node.js", pct: 88, w: 0.88 },
                { name: ".NET / C#", pct: 74, w: 0.74 },
                { name: "WPF", pct: 68, w: 0.68 },
                { name: "npm publishing", pct: 84, w: 0.84 },
                { name: "DSA", pct: 78, w: 0.78 },
              ].map((s) => (
                <div className="srow" key={s.name}>
                  <span className="sname">{s.name}</span>
                  <div
                    className="bbar"
                    role="progressbar"
                    aria-valuenow={s.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="bfill" data-w={s.w} />
                  </div>
                  <span className="spct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGS ════════════════════════════════════════════════════ */}
      <section id="logs" aria-labelledby="logs-heading">
        <LogFeed />
      </section>

      {/* ═══ CONTACT ═════════════════════════════════════════════════ */}
      <section id="contact" aria-labelledby="contact-heading">
        <p className="tag" data-i="05">
          Contact
        </p>
        <div className="contact-wrap">
          <h2 className="contact-h rv" id="contact-heading">
            Let&apos;s
            <br />
            <span>build</span>
            <br />
            <span className="ghost">something.</span>
          </h2>
          <p className="contact-sub rv2">
            Open to full-time roles, freelance projects, and interesting
            open-source work. If you have a problem worth solving — let&apos;s
            talk.
          </p>
          <div className="contact-grid rv3">
            {[
              {
                href: "https://www.nishkumar.dev",
                ico: "www",
                platform: "Website",
                handle: "nishkumar.dev",
                label: "Visit website nishkumar.dev",
              },
              {
                href: "https://github.com/NitishKumar078",
                ico: "gh",
                platform: "GitHub",
                handle: "@NitishKumar078",
                label: "GitHub profile @NitishKumar078",
              },
              {
                href: "https://www.linkedin.com/in/nitish-kumar-m",
                ico: "in",
                platform: "LinkedIn",
                handle: "nitish-kumar-m",
                label: "LinkedIn profile nitish-kumar-m",
              },
              {
                href: "https://www.npmjs.com/~nitish_kumar_m",
                ico: "npm",
                platform: "npm",
                handle: "~nitish_kumar_m",
                label: "npm profile nitish_kumar_m",
              },
            ].map((c) => (
              <a
                key={c.ico}
                className="citem"
                href={c.href}
                target="_blank"
                rel="noopener"
                aria-label={c.label}
              >
                <div className="citem-l">
                  <div className="cico" aria-hidden="true">
                    {c.ico}
                  </div>
                  <div>
                    <div className="cplatform">{c.platform}</div>
                    <div className="chandle">{c.handle}</div>
                  </div>
                </div>
                <span className="carrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════════ */}
      <footer>
        <span>
          © 2026 <em>Nitish Kumar M</em> — Bengaluru, India
        </span>
        <div className="footer-links">
          <span>
            <a
              href="https://github.com/NitishKumar078"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            &nbsp;·&nbsp;
            <a href="https://www.nishkumar.dev" target="_blank" rel="noopener">
              nishkumar.dev
            </a>
            &nbsp;·&nbsp;
            <a
              href="https://www.linkedin.com/in/nitish-kumar-m"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </footer>

      <ScrollReveal />
    </>
  );
}
