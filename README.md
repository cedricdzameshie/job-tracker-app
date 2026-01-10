# Job Tracker App

A React-based job application tracker that helps users organize, manage, and track job applications in one place.

🔗 **Live Demo:** https://cedricdzameshie.github.io/job-tracker-app  
📦 **GitHub Repo:** https://github.com/cedricdzameshie/job-tracker-app

This tool helps job seekers stay organized during active job searches by centralizing application data, reducing manual tracking, and providing clear visibility into application progress.

The project focuses on clean component architecture, real-world UI behavior, and incremental feature development, and is actively being improved.

---

## ✨ Features (v1)

### Application Management
- Add new job applications
- Edit existing applications inline
- Update application status (Applied, Interviewing, Offer, Rejected)
- Delete individual applications (with confirmation)
- Clear all applications

### Organization & Productivity
- Search applications by company or role
- Filter by application status
- Sort applications by:
  - Date applied (newest / oldest)
  - Company name
  - Role
  - Status
- Live statistics summary (total applications + per status)

### User Experience
- Form validation with user feedback
- Confirmation before destructive actions
- Clean, responsive layout
- Component-scoped styling

### Persistence
- Applications are saved to `localStorage`
- Data persists across page refreshes

---

## 🧠 Technical Highlights

This project demonstrates:

- React functional components
- `useState` and `useEffect`
- Controlled form inputs
- Derived state (filtering, sorting, statistics)
- Immutable state updates
- Component composition and prop-driven architecture
- Local persistence using browser APIs
- Incremental refactoring and UX polish

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- CSS (component-scoped styles)
- Vite
- Git & GitHub
- GitHub Pages (deployment)

---

## 📁 Project Structure

src/
├─ components/
│ ├─ FiltersBar.jsx
│ ├─ Header.jsx
│ ├─ JobCard.jsx
│ ├─ JobForm.jsx
│ └─ JobList.jsx
├─ pages/
│ └─ Dashboard.jsx
├─ styles/
│ ├─ filters.css
│ ├─ FiltersBar.css
│ ├─ global.css
│ ├─ JobCard.css
│ ├─ JobForm.css
│ ├─ JobList.css
│ └─ layout.css
├─ App.jsx
└─ main.jsx


---

## 🚧 Planned Improvements (v2)

- Improved accessibility (ARIA attributes, keyboard navigation)
- Empty-state messaging
- Confirmation dialogs for bulk actions
- Backend persistence (API + database)
- Authentication and user accounts
- Export applications (CSV / PDF)
- Automated testing

---

## 📌 Status

- **Version:** v1.0  
- **Status:** Actively developed and iterating

---

## 🚀 Getting Started

```bash
npm install
npm run dev

---

🧩 Why this project exists

This project was built to:

Apply real-world React patterns

Reinforce state management fundamentals

Simulate a practical productivity tool

Serve as an evolving portfolio project that grows over time
