import Header from '../components/Header';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';

const jobs = [
  {
    id: 1,
    company: "Example Corp",
    role: "Frontend Developer",
    status: "Applied",
    dateApplied: "2025-01-01",
  },
];

function Dashboard() {
  return (
    <div>
      <Header />
      <main>
        <JobForm />
        <JobList jobs={jobs} />
      </main>

      
    </div>
  );
}

export default Dashboard;
