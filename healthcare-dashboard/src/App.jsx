import Layout from "./components/layout/Layout/Layout"
import DashboardMainContent from "./components/dashboard/DashboardMainContent/DashboardMainContent"
import "./App.css"
import "./styles/globals.css"
import "./styles/variables.css"
import "./styles/responsive.css"

function App() {
  return (
    <div className="App">
      <Layout>
        <DashboardMainContent />
      </Layout>
    </div>
  )
}

export default App
