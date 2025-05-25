import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData } from "../../../data/calendarData"
import Card from "../../common/Card/Card"
import "./CalendarView.css"

const CalendarView = () => {
  const { currentMonth, year, appointments, upcomingAppointments } = calendarData

  const daysInMonth = new Date(year, 9, 0).getDate() // October 2021
  const firstDayOfMonth = new Date(year, 8, 1).getDay() // September 1st day

  const calendarDays = []

  // Empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <div className="calendar-container">
      <Card className="calendar-card">
        <div className="calendar-header">
          <div className="calendar-nav">
            <button className="calendar-nav-btn">
              <ChevronLeft size={16} />
            </button>
            <h3 className="calendar-title">
              {currentMonth} {year}
            </h3>
            <button className="calendar-nav-btn">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-days">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${day ? "has-day" : "empty"} ${appointments[day] ? "has-appointments" : ""}`}
              >
                {day && (
                  <>
                    <span className="day-number">{day}</span>
                    {appointments[day] && (
                      <div className="day-appointments">
                        {appointments[day].map((time, idx) => (
                          <div key={idx} className="appointment-time">
                            {time}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="upcoming-appointments">
        {upcomingAppointments.map((appointment, index) => (
          <Card key={index} className="appointment-card">
            <div className="appointment-content">
              <div className="appointment-header">
                <h4 className="appointment-title">{appointment.title}</h4>
                <span className="appointment-time">{appointment.time}</span>
              </div>
              <p className="appointment-doctor">{appointment.doctor}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CalendarView
