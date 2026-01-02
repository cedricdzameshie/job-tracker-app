import { useState } from "react";
import "../styles/JobForm.css";

function JobForm({ onAddJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanCompany = company.trim();
    const cleanRole = role.trim();

    if (!cleanCompany || !cleanRole) {
      setError("Company and role are required.");
      return;
    }

    const newJob = {
      id: Date.now(),
      company: cleanCompany,
      role: cleanRole,
      status: "Applied",
      dateApplied: new Date().toISOString().slice(0, 10),
    };

    onAddJob(newJob);

    setCompany("");
    setRole("");
    setError("");
  }

  return (
  <section className="job-form">
    <h2 className="job-form__title">Add Application</h2>

    <form className="job-form__form" onSubmit={handleSubmit}>
      <div className="job-form__field">
        <label className="job-form__label" htmlFor="company">
          Company
        </label>
        <input
          className="job-form__input"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g., Verizon"
        />
      </div>

      <div className="job-form__field">
        <label className="job-form__label" htmlFor="role">
          Role
        </label>
        <input
          className="job-form__input"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g., Frontend Developer"
        />
      </div>
{ error && <p className="job-form__error">{error}</p> }
      <button className="job-form__submit" type="submit">
        Add
      </button>
    </form>
  </section>
);
}

export default JobForm;
