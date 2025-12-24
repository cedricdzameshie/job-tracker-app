import { useState } from 'react';
import Header from '../components/Header';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';


function Dashboard() {
  const [jobs, setJobs] = useState([
  {
    id: 1,
    company: "Example Corp",
    role: "Frontend Developer",
    status: "Applied",
    dateApplied: "2025-01-01",
  },
]);

function handleAddJob(newJob) {
  setJobs((prevJobs) => [newJob, ...prevJobs]);
}

  return (
    <div>
      <Header />
      <main>
        <JobForm onAddJob={handleAddJob}/>
        <JobList jobs={jobs} />
      </main>

      
    </div>
  );
}

export default Dashboard;
