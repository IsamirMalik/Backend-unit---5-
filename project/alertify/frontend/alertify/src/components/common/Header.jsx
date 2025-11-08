import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/incidentList" element={<IncidentList />}>Incidents</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
