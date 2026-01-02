import "../styles/filters.css";
import "../styles/FiltersBar.css";

function FiltersBar({
  query,
  setQuery,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  stats,
}) {
  return (
    <section className="filters">
      <div className="filters__controls">
        <div className="filters__field">
          <label htmlFor="search" className="filters__label">
            Search
          </label>
          <input
            id="search"
            className="filters__input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Company or role..."
          />
        </div>

        <div className="filters__field">
          <label htmlFor="statusFilter" className="filters__label">
            Status
          </label>
          <select
            id="statusFilter"
            className="filters__select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="filters__field">
          <label htmlFor="sortBy" className="filters__label">
            Sort
          </label>
          <select
            id="sortBy"
            className="filters__select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dateDesc">Date (newest)</option>
            <option value="dateAsc">Date (oldest)</option>
            <option value="companyAsc">Company (A–Z)</option>
            <option value="roleAsc">Role (A–Z)</option>
            <option value="statusAsc">Status (A–Z)</option>
          </select>
        </div>
      </div>

      <div className="filters__stats">
        <span>
          <strong>Total:</strong> {stats.total}
        </span>
        <span>Applied: {stats.Applied || 0}</span>
        <span>Interviewing: {stats.Interviewing || 0}</span>
        <span>Offer: {stats.Offer || 0}</span>
        <span>Rejected: {stats.Rejected || 0}</span>
      </div>
    </section>
  );
}

export default FiltersBar;
