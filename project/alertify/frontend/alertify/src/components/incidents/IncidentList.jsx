import ReportIncident from "./ReportIncident";
import { Link } from "react-router-dom";
import { Incidents } from "../../data/incidentsData";

const IncidentList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl text-center font-bold mb-6">INCIDENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {Incidents.map((incident) => (
          <div key={incident.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            {/* Media Section */}
            <div className="relative h-48">
              {incident.media.images.length > 0 ? (
                <img
                  src={incident.media.images[0]}
                  alt={incident.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{incident.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{incident.description}</p>
              
              {/* Status and Priority */}
              <div className="flex gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  incident.status === 'Active' ? 'bg-green-100 text-green-800' :
                  incident.status === 'Resolved' ? 'bg-gray-100 text-gray-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {incident.status}
                </span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  incident.priority === 'High' ? 'bg-red-100 text-red-800' :
                  incident.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {incident.priority}
                </span>
              </div>

              {/* Location and Reporter */}
              <p className="text-gray-600 text-sm mb-1">{incident.location}</p>
              <p className="text-gray-600 text-sm mb-2">Reported by: {incident.reportedBy}</p>
              
              {/* Timestamp */}
              <p className="text-gray-500 text-sm mb-4">
                {new Date(incident.timestamp).toLocaleString()}
              </p>

              {/* See More Button */}
              <Link
                to={`/incident/${incident.id}`}
                className="block w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 transition-colors text-center"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center">
      <button className="w-1/4 justify-center py-2 px-4  my-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <Link to='/reportIncident' element={<ReportIncident />}  >Report Incident</Link>
      </button>
        </div>
    </div>
  );
};

export default IncidentList;
