"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ENTRIES,
  TRACK_META,
  ALL_FILTERS,
  type TrackType,
  type LogEntry,
} from "../lib/entries";
import Link from "next/link";

// ─── helpers ──────────────────────────────────────────────────────────────────

function parseDate(iso: string): number {
  return new Date(iso).getTime();
}

// ─── Drawer ───────────────────────────────────────────────────────────────────

function DetailDrawer({
  entry,
  onClose,
}: {
  entry: LogEntry;
  onClose: () => void;
}) {
  const meta = TRACK_META[entry.track];

  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <>
      <motion.div
        className="gl-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="gl-drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 340, damping: 36 }}
        role="dialog"
        aria-modal="true"
      >
        <div className="gl-drawer-head">
          <div
            className="gl-drawer-pill"
            style={{
              background: meta.color + "15",
              borderColor: meta.color + "40",
              color: meta.color,
            }}
          >
            <span
              className="gl-drawer-pill-dot"
              style={{ background: meta.color }}
            />
            {meta.label}
          </div>
          <button
            className="gl-drawer-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="gl-drawer-body">
          <time className="gl-drawer-date">{entry.dateLabel}</time>
          <h2 className="gl-drawer-title">{entry.title}</h2>
          <p className="gl-drawer-desc">{entry.body}</p>

          <div className="gl-drawer-tags">
            {entry.tags.map((t) => (
              <span key={t} className="gl-drawer-tag">
                #{t}
              </span>
            ))}
          </div>

          {entry.link && (
            <a
              href={entry.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gl-drawer-link"
              style={{ borderColor: meta.color + "60", color: meta.color }}
            >
              {entry.link.label}
            </a>
          )}
        </div>
      </motion.aside>
    </>
  );
}

// ─── Single commit node ───────────────────────────────────────────────────────

// Track line offsets (0 for main/personal, 20 for work, 40 for learn)
const TRACK_OFFSET: Record<TrackType, number> = {
  personal: 0,
  work: 20,
  learn: 40,
};

function CommitNode({
  entry,
  prevTrack,
  nextTrack,
  onClick,
  index,
}: {
  entry: LogEntry;
  prevTrack: TrackType;
  nextTrack: TrackType;
  onClick: () => void;
  index: number;
}) {
  const meta = TRACK_META[entry.track];
  const isMain = entry.track === "personal";
  const xOffset = TRACK_OFFSET[entry.track];
  const startX = 1; // Center of main line
  const endX = xOffset + 1; // Center of branch dot

  return (
    <motion.div
      className="gl-node"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      {/* The graph column */}
      <div className="gl-graph">
        {/* Continuous vertical track lines */}
        <div
          className="gl-track-line"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "2px",
            background: TRACK_META.personal.color,
            opacity: 0.55,
          }}
        />
        <div
          className="gl-track-line"
          style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: "2px",
            background: TRACK_META.work.color,
            opacity: 0.2,
          }}
        />
        <div
          className="gl-track-line"
          style={{
            position: "absolute",
            left: 40,
            top: 0,
            bottom: 0,
            width: "2px",
            background: TRACK_META.learn.color,
            opacity: 0.2,
          }}
        />

        {/* Upper split curve (only if coming from a different track above) */}
        {!isMain && prevTrack !== entry.track && (
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "56px",
              height: "26px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <path
              d={`M ${startX} 0 C ${startX} 13, ${endX} 13, ${endX} 26`}
              fill="none"
              stroke={meta.color}
              strokeWidth="2"
              opacity={0.6}
            />
          </svg>
        )}

        {/* Lower merge curve (only if going to a different track below) */}
        {!isMain && nextTrack !== entry.track && (
          <svg
            style={{
              position: "absolute",
              top: "26px",
              left: 0,
              width: "56px",
              height: "calc(100% - 26px)",
              pointerEvents: "none",
              zIndex: 1,
            }}
            preserveAspectRatio="none"
            viewBox="0 0 56 100"
          >
            <path
              d={`M ${endX} 0 C ${endX} 50, ${startX} 50, ${startX} 100`}
              fill="none"
              stroke={meta.color}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              opacity={0.6}
            />
          </svg>
        )}

        {/* Main dot on the corresponding track */}
        <button
          className={`gl-dot${isMain ? "gl-dot-main" : ""}`}
          style={{
            left: xOffset - 5 /* center dot horizontally on line */,
            borderColor: meta.color,
            background: isMain ? meta.color : "var(--ink)",
            boxShadow: `0 0 10px ${meta.color}40`,
          }}
          onClick={onClick}
          aria-label={`View: ${entry.title}`}
        />
      </div>

      {/* The commit card */}
      <button className="gl-card" onClick={onClick}>
        <div className="gl-card-head">
          <div className="gl-card-left">
            <span className="gl-card-icon" style={{ color: meta.color }}>
              {entry.track === "work"
                ? "◆"
                : entry.track === "learn"
                  ? "◇"
                  : "●"}
            </span>
            <h3 className="gl-card-title">{entry.title}</h3>
          </div>
          <time className="gl-card-date">{entry.dateLabel}</time>
        </div>

        <p className="gl-card-body">{entry.body}</p>

        {/* Tags row */}
        <div className="gl-card-tags">
          {entry.tags.map((t) => (
            <span
              key={t}
              className="gl-card-tag"
              style={{
                background: meta.color + "12",
                borderColor: meta.color + "30",
                color: meta.color,
              }}
            >
              #{t}
            </span>
          ))}
        </div>
      </button>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function LogTimeline() {
  const [activeFilter, setActiveFilter] = useState<TrackType | "all">("all");
  const [drawer, setDrawer] = useState<LogEntry | null>(null);

  const visible = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? ENTRIES
        : ENTRIES.filter((e) => e.track === activeFilter);
    return [...filtered].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, [activeFilter]);

  // Stats
  const counts = useMemo(() => {
    const c = { work: 0, personal: 0, learn: 0 };
    ENTRIES.forEach((e) => c[e.track]++);
    return c;
  }, []);

  return (
    <div className="gl-page">
      {/* ── Header ── */}
      <header className="gl-header">
        <div>
          <p className="tag" data-i="05">
            Timeline
          </p>
          <h1 className="gl-title">Activity History</h1>
          <p className="gl-sub">{ENTRIES.length} events across all tracks</p>
        </div>
        <Link href="/" className="btn btn-line gl-back">
          ← Back
        </Link>
      </header>

      {/* ── Controls row ── */}
      <div className="gl-controls">
        <div className="gl-filters" role="group" aria-label="Filter by track">
          {ALL_FILTERS.map((f) => {
            const tm =
              f.value !== "all" ? TRACK_META[f.value as TrackType] : null;
            const on = activeFilter === f.value;
            return (
              <button
                key={f.value}
                className={`gl-filter${on ? "on" : ""}`}
                style={
                  on && tm
                    ? {
                        borderColor: tm.color,
                        color: tm.color,
                        background: "transparent",
                        boxShadow: `0 0 12px ${tm.color}40, inset 0 0 8px ${tm.color}20`,
                      }
                    : on
                      ? {
                          borderColor: "var(--neon)",
                          color: "var(--neon)",
                          background: "transparent",
                          boxShadow: `0 0 12px rgba(212,255,30,0.3), inset 0 0 8px rgba(212,255,30,0.15)`,
                        }
                      : {}
                }
                onClick={() => setActiveFilter(f.value as TrackType | "all")}
              >
                {tm && (
                  <span
                    className="gl-filter-dot"
                    style={{ background: tm.color }}
                  />
                )}
                {f.label}
                {tm && (
                  <span className="gl-filter-count">
                    {counts[f.value as TrackType]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="gl-legend">
          <div className="gl-legend-item">
            <span
              className="gl-legend-line"
              style={{ background: "#d4ff1e" }}
            />
            <span>main (personal)</span>
          </div>
          <div className="gl-legend-item">
            <span
              className="gl-legend-line"
              style={{ background: "#ff5757" }}
            />
            <span>work</span>
          </div>
          <div className="gl-legend-item">
            <span
              className="gl-legend-line"
              style={{ background: "#38bdf8" }}
            />
            <span>learn</span>
          </div>
        </div>
      </div>

      {/* ── Git graph ── */}
      <div className="gl-graph-container">
        {/* Top cap */}
        <div className="gl-cap gl-cap-top">
          <div className="gl-cap-dot" />
          <span className="gl-cap-label">
            ▸ <strong>main</strong>
          </span>
        </div>

        {/* Commit list */}
        <AnimatePresence initial={false}>
          {visible.map((entry, i) => {
            const prevTrack = i > 0 ? visible[i - 1].track : entry.track;
            const nextTrack =
              i < visible.length - 1 ? visible[i + 1].track : entry.track;

            return (
              <CommitNode
                key={entry.id}
                prevTrack={prevTrack}
                nextTrack={nextTrack}
                entry={entry}
                index={i}
                onClick={() => setDrawer(entry)}
              />
            );
          })}
        </AnimatePresence>

        {/* Bottom cap */}
        <div className="gl-cap gl-cap-bottom">
          <div className="gl-cap-dot gl-cap-dot-end" />
          <span className="gl-cap-label">Initial commit</span>
        </div>
      </div>

      {/* ── Drawer ── */}
      <AnimatePresence>
        {drawer && (
          <DetailDrawer entry={drawer} onClose={() => setDrawer(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
