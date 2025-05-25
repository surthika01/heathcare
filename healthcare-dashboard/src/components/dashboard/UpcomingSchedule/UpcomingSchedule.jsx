import { appointmentsData } from "../../../data/appointments"
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard"
import Card from "../../common/Card/Card"
import "./UpcomingSchedule.css"

const UpcomingSchedule = () => {
  return (
    <Card className="upcoming-schedule">
      <div className="schedule-header">
        <h3 className="schedule-title">The Upcoming Schedule</h3>
      </div>

      <div className="schedule-content">
        {appointmentsData.map((dayGroup, index) => (
          <div key={index} className="schedule-day-group">
            <h4 className="schedule-day-title">{dayGroup.day}</h4>
            <div className="schedule-appointments">
              {dayGroup.appointments.map((appointment, idx) => (
                <SimpleAppointmentCard key={idx} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default UpcomingSchedule
