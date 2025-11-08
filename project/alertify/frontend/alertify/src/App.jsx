import Header from './components/common/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import { Routes } from 'react-router-dom';
import './index.css'
import { Routes , Route } from 'react-router-dom';
import Home from './components/dashboard/Dashboard';
import IncidentList from './components/incidents/IncidentList';
import ReportIncident from './components/incidents/ReportIncident';

function App() {

  return (
    <div className = "bg-gray-300">
      <Header/>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path="/incidentList" element={<IncidentList />} />
        <Route path="/reportIncident" element={<ReportIncident />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
