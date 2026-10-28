"use client";
import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectCategory } from "../data/portfolio";
import Icon from "./Icon";

const filters: ("All work" | ProjectCategory)[] = [
  "All work",
  "Websites",
  "Browser tools",
  "Applications",
];
export default function WorkGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All work");
  const visible = projects.filter(
    (project) => active === "All work" || project.category === active,
  );
  return (
    <>
      <div className="work-toolbar">
        <div className="filter-group" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="work-count" role="status">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div className="work-grid">
        {visible.map((project) => (
          <article
            className={`project-card project-${project.visual} ${project.image ? "project-featured" : ""}`}
            key={project.name}
          >
            <a
              className="project-visual"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.action + ": " + project.name}
            >
              {project.image ? (
                <div className="project-browser">
                  <div className="browser-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span>
                      {project.visual === "demos"
                        ? "demos.nishkumar.dev"
                        : "www.extensions.nishkumar.dev"}
                    </span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    width={1440}
                    height={1000}
                    sizes="(max-width: 700px) 90vw, 45vw"
                  />
                </div>
              ) : (
                <div
                  className={`project-art art-${project.visual}`}
                  aria-hidden="true"
                >
                  {project.visual === "mindmesh" && (
                    <>
                      <span className="mesh-orbit orbit-a" />
                      <span className="mesh-orbit orbit-b" />
                      <span className="mesh-orbit orbit-c" />
                      <span className="mesh-center">m.</span>
                      <span className="art-caption">
                        Many models. One workspace.
                      </span>
                    </>
                  )}
                  {project.visual === "invoice" && (
                    <>
                      <div className="invoice-sheet sheet-back" />
                      <div className="invoice-sheet">
                        <span>Invoice-Book</span>
                        <strong>
                          Made
                          <br />
                          to add up.
                        </strong>
                        <i />
                        <i />
                        <i />
                        <span className="invoice-sign">IB /</span>
                      </div>
                    </>
                  )}
                  {project.visual === "spy" && (
                    <>
                      <div className="spy-window window-back" />
                      <div className="spy-window">
                        <div>
                          <i />
                          <i />
                          <i />
                        </div>
                        <Icon name="window" />
                        <span>Closer to the system.</span>
                      </div>
                    </>
                  )}
                </div>
              )}
              <span className="visual-link">
                <Icon />
              </span>
            </a>
            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.image ? "Featured" : "Open source"}</span>
              </div>
              <h3>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <Icon />
                </a>
              </h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="project-note">{project.note}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
