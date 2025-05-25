import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"
import { navigationData } from "../../../data/navigationData"
import "./Sidebar.css"

const iconMap = {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
}

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-title">General</h3>
          <nav className="sidebar-nav">
            {navigationData.map((item, index) => {
              const IconComponent = iconMap[item.icon]
              return (
                <a key={index} href={item.href} className={`sidebar-link ${item.active ? "active" : ""}`}>
                  <IconComponent size={20} className="sidebar-icon" />
                  <span className="sidebar-text">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
