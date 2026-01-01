import { useState } from "react";
import "../styles/JobCard.css";

function JobCard({ job, onDeleteJob, onUpdateStatus, onEditJob }) {
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState(job.company);
  const [role, setRole] = useState(job.role);
  const [dateApplied, setDateApplied] = useState(job.dateApplied);

  function handleStatusChange(e) {
    onUpdateStatus(job.id, e.target.value);
  }

  function startEdit() {
    setCompany(job.company);
    setRole(job.role);
    setDateApplied(job.dateApplied);
    setIsEditing(true);
  }

  function cancelEdit() {
    setIsEditing(false);
  }

  function saveEdit() {
    const cleanCompany = company.trim();
    const cleanRole = role.trim();

    if (!cleanCompany || !cleanRole) return;

    onEditJob(job.id, {
      company: cleanCompany,
      role: cleanRole,
      dateApplied: dateApplied || job.dateApplied,
    });

    setIsEditing(false);
  }

  return (
    <article className="job-card">
      {isEditing ? (
        <div className="job-card__edit">
          <div className="job-card__field">
            <label className="job-card__label">Role</label>
            <input
              className="job-card__input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="job-card__field">
            <label className="job-card__label">Company</label>
            <input
              className="job-card__input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="job-card__field">
            <label className="job-card__label">Date Applied</label>
            <input
              className="job-card__input"
              type="date"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
            />
          </div>

          <div className="job-card__actions">
            <button type="button" onClick={saveEdit}>
              Save
            </button>
            <button type="button" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="job-card__title">{job.role}</h3>
          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <div className="job-card__row">
            <label className="job-card__status">
              <strong>Status:</strong>{" "}
              <select value={job.status} onChange={handleStatusChange}>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>

            <div className="job-card__actions">
              <button type="button" onClick={startEdit}>
                Edit
              </button>
              <button type="button" onClick={() => onDeleteJob(job.id)}>
                Delete
              </button>
            </div>
          </div>

          <p className="job-card__date">
            <strong>Date Applied:</strong> {job.dateApplied}
          </p>
        </>
      )}
    </article>
  );
}

export default JobCard;
