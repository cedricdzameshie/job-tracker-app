import { useEffect, useState } from "react";
import Header from "../components/Header";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import "../styles/layout.css";

function Dashboard() {
  /* =====================
     STATE
  ====================== */
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            company: "Example Corp",
            role: "Frontend Developer",
            status: "Applied",
            dateApplied: "2025-01-01",
          },
        ];
  });

  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  /* =====================
     DERIVED DATA
  ====================== */
  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.role.toLowerCase().includes(query.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : job.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  const stats = jobs.reduce(
    (acc, job) => {
      acc.total += 1;
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    { total: 0 }
  );

  /* =====================
     EFFECTS
  ====================== */
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  /* =====================
     EVENT HANDLERS
  ====================== */
  function handleAddJob(newJob) {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  }

  function handleDeleteJob(jobId) {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  }

  function handleUpdateStatus(jobId, newStatus) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  }

  function handleClearJobs() {
    setJobs([]);
  }

  /* =====================
     RENDER
  ====================== */
  return (
    <div className="page-container">
      <Header />

      {/* 🔍 Search, Filter, Stats */}
      <section style={{ margin: "12px 0", display: "grid", gap: 12 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company or role..."
            style={{ padding: 8, minWidth: 240 }}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: 8 }}
          >
            <option value="All">All statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <strong>Total:</strong> {stats.total}
          <span>Applied: {stats.Applied || 0}</span>
          <span>Interviewing: {stats.Interviewing || 0}</span>
          <span>Offer: {stats.Offer || 0}</span>
          <span>Rejected: {stats.Rejected || 0}</span>
        </div>
      </section>

      {/* 🧹 Clear Button */}
      {jobs.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <button type="button" onClick={handleClearJobs}>
            Clear all
          </button>
        </div>
      )}

      {/* 📋 Main Content */}
      <main>
        <JobForm onAddJob={handleAddJob} />
        <JobList
          jobs={filteredJobs}
          onDeleteJob={handleDeleteJob}
          onUpdateStatus={handleUpdateStatus}
          query={query}
          statusFilter={statusFilter}
        />
      </main>
    </div>
  );
}

export default Dashboard;
