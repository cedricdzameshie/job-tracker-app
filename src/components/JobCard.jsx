import '../styles/JobCard.css';

function JobCard({ job }) {
  return (
    <article className="job-card">
      <h3>{job.role}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date Applied:</strong> {job.dateApplied}</p>
    </article>
  );
}

export default JobCard;
