import { healthData } from "../../../data/healthData"
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards"
import "./AnatomySection.css"

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <div className="anatomy-main-card">
        <div className="anatomy-illustration">
          <img src="/placeholder.svg?height=400&width=200" alt="Human Anatomy" className="anatomy-image" />

          {/* Health Status Indicators */}
          <div className="health-indicator heart" data-status="healthy">
            <div className="indicator-dot"></div>
            <span className="indicator-label">Healthy Heart</span>
          </div>

          <div className="health-indicator lungs" data-status="warning">
            <div className="indicator-dot"></div>
            <span className="indicator-label">Lungs</span>
          </div>

          <div className="health-indicator teeth" data-status="healthy">
            <div className="indicator-dot"></div>
            <span className="indicator-label">Teeth</span>
          </div>

          <div className="health-indicator bone" data-status="healthy">
            <div className="indicator-dot"></div>
            <span className="indicator-label">Bone</span>
          </div>
        </div>
      </div>

      <HealthStatusCards healthData={healthData} />
    </div>
  )
}

export default AnatomySection
