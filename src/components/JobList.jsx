import JobCard from "./JobCard";

function JobList({ jobs, onDeleteJob, onUpdateStatus, query, statusFilter }) {
  if (!jobs || jobs.length === 0) {
    const hasFilters = (query && query.trim() !== "") || (statusFilter && statusFilter !== "All");
    return (
      <p>
        {hasFilters
          ? "No jobs match your search/filters."
          : "No applications yet."}
      </p>
    );
  }

  return (
    <section>
      <h2>Applications</h2>
      <div>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onDeleteJob={onDeleteJob}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </div>
    </section>
  );
}

export default JobList;
