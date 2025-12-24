import "../styles/JobCard.css";

function JobCard({ job, onDeleteJob, onUpdateStatus }) {
  function handleStatusChange(e) {
    onUpdateStatus(job.id, e.target.value);
  }

  return (
    <article className="job-card">
      <h3>{job.role}</h3>
      <p><strong>Company:</strong> {job.company}</p>

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
        <label>
          <strong>Status:</strong>{" "}
          <select value={job.status} onChange={handleStatusChange}>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>

        <button type="button" onClick={() => onDeleteJob(job.id)}>
          Delete
        </button>
      </div>

      <p style={{ marginTop: 8 }}>
        <strong>Date Applied:</strong> {job.dateApplied}
      </p>
    </article>
  );
}

export default JobCard;
