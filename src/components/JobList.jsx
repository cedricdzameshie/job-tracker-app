import JobCard from "./JobCard";

function JobList({ jobs, onDeleteJob, onUpdateStatus }) {
  if (!jobs || jobs.length === 0) {
    return <p>No applications yet.</p>;
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
