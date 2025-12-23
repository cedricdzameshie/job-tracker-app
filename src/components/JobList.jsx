import JobCard from './JobCard';

function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) {
    return <p>No applications yet.</p>;
  }

  return (
    <section>
      <h2>Applications</h2>
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobList;
