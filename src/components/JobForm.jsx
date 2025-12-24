import { useState } from "react";

function JobForm({ onAddJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanCompany = company.trim();
    const cleanRole = role.trim();

    if (!cleanCompany || !cleanRole) return;

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
  }

  return (
    <section>
      <h2>Add Application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g., Verizon"
          />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g., Frontend Developer"
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default JobForm;
