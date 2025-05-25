import Card from "../../common/Card/Card"
import "./ActivityFeed.css"

const ActivityFeed = () => {
  const activityData = [
    { day: "Mon", appointments: 2 },
    { day: "Tue", appointments: 4 },
    { day: "Wed", appointments: 1 },
    { day: "Thu", appointments: 3 },
    { day: "Fri", appointments: 5 },
    { day: "Sat", appointments: 2 },
    { day: "Sun", appointments: 1 },
  ]

  const maxAppointments = Math.max(...activityData.map((d) => d.appointments))

  return (
    <Card className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtitle">3 appointments on this week</p>
      </div>

      <div className="activity-chart">
        {activityData.map((data, index) => (
          <div key={index} className="chart-bar-container">
            <div
              className="chart-bar"
              style={{
                height: `${(data.appointments / maxAppointments) * 100}%`,
              }}
            ></div>
            <span className="chart-label">{data.day}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default ActivityFeed
