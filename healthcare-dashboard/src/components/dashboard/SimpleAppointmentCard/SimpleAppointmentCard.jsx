import { Clock, User, Heart, Eye, Brain } from "lucide-react"
import "./SimpleAppointmentCard.css"

const iconMap = {
  Clock,
  User,
  Heart,
  Eye,
  Brain,
}

const SimpleAppointmentCard = ({ appointment }) => {
  const IconComponent = iconMap[appointment.icon] || User

  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">
        <IconComponent size={16} />
      </div>
      <div className="appointment-details">
        <h5 className="appointment-name">{appointment.title}</h5>
        <p className="appointment-time">{appointment.time}</p>
      </div>
      <div className={`appointment-status ${appointment.status}`}>
        <div className="status-dot"></div>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
