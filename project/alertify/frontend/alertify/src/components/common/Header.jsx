import logo from "../../assets/logo.png";
import { Link , NavLink } from "react-router-dom";
import IncidentList from "../incidents/IncidentList";

const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between p-1 bg-gray-500">
        <div className="flex justify-center text-white">
          <img src={logo} alt="logo" className="h-12" />
          <h1 className="text-3xl font-bold">Alertify</h1>
        </div>
        <nav>
          <ul className="flex gap-10 m-2 text-xl font-bold text-white">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-900' : 'text-black-500'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/incidentList" className={({ isActive }) => isActive ? 'text-red-900' : 'text-black-500'} element={<IncidentList />}>Incidents</NavLink>
            </li>
            <li>
              <NavLink to="/help" className={({ isActive }) => isActive ? 'text-red-900' : 'text-black-500'}>Help</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'text-red-900' : 'text-black-500'} >Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
