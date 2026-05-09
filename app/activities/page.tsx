import type { Metadata } from "next";
import LogTimeline from "./LogTimeline";

export const metadata: Metadata = {
  title: "All Activities — Nitish Kumar M",
  description:
    "A full interactive timeline of Nitish Kumar M's work, personal, and learning activities. Filter by track and zoom into specific time ranges.",
};

export default function ActivitiesPage() {
  return (
    <main>
      <LogTimeline />
    </main>
  );
}
