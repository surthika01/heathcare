import { Search, Bell, Plus } from "lucide-react"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <h1>Healthcare.</h1>
          </div>
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </div>

        <div className="header-right">
          <button className="add-button">
            <Plus size={20} />
          </button>
          <button className="notification-button">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="user-avatar" />
            <div className="user-info">
              <span className="user-name">Dr. Sarah Wilson</span>
              <span className="user-role">Healthcare Provider</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
