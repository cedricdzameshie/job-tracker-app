import { useEffect, useState } from "react";
import Header from "../components/Header";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import "../styles/layout.css";

function Dashboard() {
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

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  function handleAddJob(newJob) {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  }

  function handleClearJobs() {
    setJobs([]);
  }

  return (
    <div className="page-container">
      <Header />

      {jobs.length > 0 && (
  <div style={{ marginBottom: 12 }}>
    <button type="button" onClick={handleClearJobs}>
      Clear all
    </button>
  </div>
)}


      <main>
        <JobForm onAddJob={handleAddJob} />
        <JobList jobs={jobs} />
      </main>
    </div>
  );
}

export default Dashboard;
