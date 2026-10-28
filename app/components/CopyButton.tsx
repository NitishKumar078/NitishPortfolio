"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function CopyButton({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    timer.current = setTimeout(() => setStatus("idle"), 4000);
  }
  return (
    <span className="copy-control">
      <button
        className="copy-button"
        type="button"
        onClick={copy}
        aria-label={`${label}: ${text}`}
      >
        <Icon name={status === "copied" ? "check" : "copy"} />
        <span>{status === "copied" ? "Copied" : label}</span>
      </button>
      <span
        className={status === "failed" ? "copy-error" : "sr-only"}
        role="status"
      >
        {status === "copied"
          ? "Copied to clipboard."
          : status === "failed"
            ? "Copy unavailable. Select the text to copy it manually."
            : ""}
      </span>
    </span>
  );
}
