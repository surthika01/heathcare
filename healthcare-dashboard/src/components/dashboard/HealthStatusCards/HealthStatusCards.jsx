import Card from "../../common/Card/Card"
import "./HealthStatusCards.css"

const HealthStatusCards = ({ healthData }) => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <Card key={index} className="health-status-card">
          <div className="health-status-content">
            <div className="health-status-header">
              <h4 className="health-status-title">{item.title}</h4>
              <div className="health-status-indicator" data-status={item.status}></div>
            </div>
            <p className="health-status-date">{item.lastChecked}</p>
            <p className="health-status-description">{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default HealthStatusCards
