import { useParams, Link, useNavigate } from "react-router-dom";
import { Incidents } from "../../data/incidentsData";

const IncidentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const incident = Incidents.find((inc) => inc.id === parseInt(id));

  if (!incident) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h2 className="text-2xl font-bold mb-2">Incident Not Found</h2>
          <p>The incident you're looking for doesn't exist.</p>
          <Link
            to="/incidentList"
            className="text-blue-600 hover:text-blue-800 underline mt-4 inline-block"
          >
            ← Back to Incidents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
      >
        <span>←</span> Back
      </button>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-800 text-white p-6">
          <h1 className="text-4xl font-bold mb-2">{incident.title}</h1>
          <div className="flex gap-3 mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                incident.status === "Active"
                  ? "bg-green-500"
                  : incident.status === "Resolved"
                  ? "bg-gray-500"
                  : "bg-yellow-500"
              }`}
            >
              {incident.status}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                incident.priority === "High"
                  ? "bg-red-500"
                  : incident.priority === "Medium"
                  ? "bg-orange-500"
                  : "bg-blue-500"
              }`}
            >
              {incident.priority} Priority
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {incident.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p className="text-gray-600">{incident.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Reported By
              </h3>
              <p className="text-gray-600">{incident.reportedBy}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Reported On
              </h3>
              <p className="text-gray-600">
                {new Date(incident.timestamp).toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Incident ID
              </h3>
              <p className="text-gray-600">#{incident.id}</p>
            </div>
          </div>

          {/* Media Section */}
          {incident.media.images.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {incident.media.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${incident.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Image+Not+Available";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {incident.media.videos.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Videos</h2>
              <div className="space-y-4">
                {incident.media.videos.map((video, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">{video}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Video file reference
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/incidentList"
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              View All Incidents
            </Link>
            <Link
              to="/reportIncident"
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Report New Incident
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetail;

