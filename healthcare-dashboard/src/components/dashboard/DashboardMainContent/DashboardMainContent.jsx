import AnatomySection from "../AnatomySection/AnatomySection"
import CalendarView from "../CalendarView/CalendarView"
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule"
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import "./DashboardMainContent.css"

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back, Dr. Sarah Wilson</p>
      </div>

      <div className="dashboard-grid">
        <div className="anatomy-section">
          <AnatomySection />
        </div>

        <div className="calendar-section">
          <CalendarView />
        </div>

        <div className="schedule-activity-section">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default DashboardMainContent
