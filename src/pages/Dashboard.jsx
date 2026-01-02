import { useEffect, useState } from "react";
import Header from "../components/Header";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import FiltersBar from "../components/FiltersBar";
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
  const [sortBy, setSortBy] = useState("dateDesc");

  /* =====================
     DERIVED DATA
  ====================== */

  // Filtered Jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesQuery =
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.role.toLowerCase().includes(query.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : job.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  // Sorted Jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    const aDate = new Date(a.dateApplied).getTime();
    const bDate = new Date(b.dateApplied).getTime();

    switch (sortBy) {
      case "dateDesc":
        return bDate - aDate;
      case "dateAsc":
        return aDate - bDate;
      case "companyAsc":
        return a.company.localeCompare(b.company);
      case "roleAsc":
        return a.role.localeCompare(b.role);
      case "statusAsc":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  // Stats
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

  function handleEditJob(jobId, updates) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, ...updates } : job
      )
    );
  }

  function handleDeleteJob(jobId) {
    const confirmed = window.confirm("Delete this application?");
    if (!confirmed) return;
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

      {/* 🔍 Filters Bar */}
      <FiltersBar
  query={query}
  setQuery={setQuery}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
  sortBy={sortBy}
  setSortBy={setSortBy}
  stats={stats}
/>

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
          jobs={sortedJobs}
          onDeleteJob={handleDeleteJob}
          onUpdateStatus={handleUpdateStatus}
          onEditJob={handleEditJob}
          query={query}
          statusFilter={statusFilter}
        />
      </main>
    </div>
  );
}

export default Dashboard;
