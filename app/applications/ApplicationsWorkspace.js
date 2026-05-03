"use client";

import { useState } from "react";
import AddApplicationModal from "./AddApplicationModal";
import ApplicationsBoard from "./ApplicationsBoard";

export default function ApplicationsWorkspace({ statuses, initialApplications }) {
  const [applications, setApplications] = useState(initialApplications);

  function handleApplicationCreated(application) {
    if (!application) {
      return;
    }

    setApplications((currentApplications) => [
      application,
      ...currentApplications,
    ]);
  }

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold text-slate-950">
          Your Job Tracker
        </h1>

        <AddApplicationModal onApplicationCreated={handleApplicationCreated} />
      </div>

      <ApplicationsBoard
        statuses={statuses}
        applications={applications}
        onApplicationsChange={setApplications}
      />
    </section>
  );
}
