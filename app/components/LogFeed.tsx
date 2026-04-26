'use client';
import { useState } from 'react';

type FilterType = 'all' | 'blog' | 'thought' | 'working-on' | 'update';

const ENTRIES = [
  {
    type: 'working-on' as FilterType,
    date: '2026-04-22',
    dateLabel: 'Apr 22, 2026',
    title: 'Portfolio redesign — this page',
    body: (
      <>
        Building a completely new version of my portfolio with <strong>Bebas Neue + DM Mono</strong>,
        a full responsive system using <code>clamp()</code> throughout, and now this living log feed
        so visitors can see what I&apos;m actually working on day-to-day.
      </>
    ),
    tags: ['html', 'css', 'design'],
    link: null,
  },
  {
    type: 'blog' as FilterType,
    date: '2026-04-10',
    dateLabel: 'Apr 10, 2026',
    title: 'Why I built favicon-extractor',
    body: (
      <>
        I needed reliable favicon fetching for a side project and every solution I found either ran
        in the browser or had heavy dependencies. Wrote a clean <strong>Node.js-only utility</strong>,
        published it on npm, and documented it properly. Here&apos;s what I learned about dual ESM/CJS exports.
      </>
    ),
    tags: ['npm', 'typescript', 'node'],
    link: { href: 'https://www.npmjs.com/package/favicon-extractor', label: 'Read →' },
  },
  {
    type: 'thought' as FilterType,
    date: '2026-04-05',
    dateLabel: 'Apr 5, 2026',
    title: 'The ESM/CJS export mess is real',
    body: (
      <>
        Setting up dual <code>exports</code> in <code>package.json</code> sounds simple until you hit
        the edge cases — <code>require()</code> vs <code>import</code>, <code>.mjs</code> extensions,
        and bundler quirks. Spent two hours on something that should take ten minutes.
        Documenting this so future-me doesn&apos;t repeat it.
      </>
    ),
    tags: ['esm', 'node', 'dx'],
    link: null,
  },
  {
    type: 'working-on' as FilterType,
    date: '2026-03-28',
    dateLabel: 'Mar 28, 2026',
    title: 'Chrome extension — productivity tool',
    body: (
      <>
        Experimenting with a <strong>Manifest V3</strong> Chrome extension using React + Vite.
        The goal: a lightweight tab manager that surfaces context without getting in the way.
        Early stage — just getting the background service worker pattern right.
      </>
    ),
    tags: ['chrome-extension', 'react', 'mv3'],
    link: null,
  },
  {
    type: 'update' as FilterType,
    date: '2026-03-15',
    dateLabel: 'Mar 15, 2026',
    title: 'Spy — refactored input capture',
    body: (
      <>
        Rewrote the keyboard and mouse hook logic in <strong>Spy</strong> to use lower-level
        Win32 hooks instead of WPF event routing. Much more reliable across different window types,
        and no longer drops events under high-frequency input.
      </>
    ),
    tags: ['csharp', 'wpf', 'win32'],
    link: { href: 'https://github.com/NitishKumar078/Spy', label: 'GitHub →' },
  },
  {
    type: 'thought' as FilterType,
    date: '2026-03-08',
    dateLabel: 'Mar 8, 2026',
    title: 'DSA isn\'t just interview prep',
    body: (
      <>
        The more I practice DSA the more I see it show up in real code — choosing the right
        data structure for a cache, recognising a graph problem in a dependency resolver,
        knowing when <code>O(n log n)</code> actually matters. It&apos;s worth doing consistently,
        not just before interviews.
      </>
    ),
    tags: ['dsa', 'learning'],
    link: null,
  },
];

const FILTERS: { label: string; value: FilterType | 'all' }[] = [
  { label: 'All',        value: 'all'        },
  { label: 'Blog',       value: 'blog'       },
  { label: 'Thought',    value: 'thought'    },
  { label: 'Working on', value: 'working-on' },
  { label: 'Update',     value: 'update'     },
];

export default function LogFeed() {
  const [active, setActive] = useState<FilterType | 'all'>('all');

  const visible = ENTRIES.filter(e => active === 'all' || e.type === active);

  return (
    <>
      <div className="log-header">
        <div>
          <p className="tag" data-i="04">Log</p>
          <h2 className="sec-h rv" id="log-heading" style={{ marginBottom: 0 }}>Activity feed.</h2>
        </div>
        <div className="log-filters rv2" role="group" aria-label="Filter log entries">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`log-filter${active === f.value ? ' active' : ''}`}
              data-filter={f.value}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="log-feed rv3" id="logFeed" role="feed" aria-label="Activity log entries">
        {visible.length === 0 && (
          <div className="log-empty show" role="status" aria-live="polite">
            No entries for this filter yet — check back soon.
          </div>
        )}
        {visible.map((entry, idx) => (
          <article
            key={idx}
            className="log-entry"
            data-type={entry.type}
            aria-label={`Log entry: ${entry.title}`}
          >
            <div className="log-entry-head">
              <span className={`log-badge ${entry.type}`}>
                {FILTERS.find(f => f.value === entry.type)?.label}
              </span>
              <time className="log-date" dateTime={entry.date}>{entry.dateLabel}</time>
            </div>
            <h3 className="log-title">{entry.title}</h3>
            <p className="log-body">{entry.body}</p>
            <div className="log-entry-foot">
              <div className="log-tags">
                {entry.tags.map(tag => (
                  <span key={tag} className="log-tag">{tag}</span>
                ))}
              </div>
              {entry.link && (
                <a className="log-read" href={entry.link.href} target="_blank" rel="noopener">
                  {entry.link.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="log-more rv">
        <p className="log-count">
          Showing <em>{visible.length}</em> of <em>{ENTRIES.length}</em> entries
        </p>
        <a href="https://github.com/NitishKumar078" target="_blank" rel="noopener" className="btn btn-line">
          All activity on GitHub ↗
        </a>
      </div>
    </>
  );
}
