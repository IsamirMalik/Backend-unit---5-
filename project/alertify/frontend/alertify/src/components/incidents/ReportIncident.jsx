const ReportIncident = () => {

  return (
    <div className="mx-78 py-16  min-h-screen justify-center">
      <div className="text-5xl font-bold mb-6 text-center">
        <h2>REPORT INCIDENT</h2>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Emergency Type:
            </label>
            <select name="EmergencyType" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2 border">
              <option value="Fire">Fire</option>
              <option value="Medical Emergency">Medical Emergency</option>
              <option value="Road Accident">Road Accident</option>
              <option value="Suspicious Activity">Suspicious Activity</option>
              <option value="Natural Disaster">Natural Disaster</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea name="description" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2 border" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </label>
            <input type="text" name="Location" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2 border" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Media:
            </label>
            <input type="file" name="media" multiple className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2 border" />
          </div>
          <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
};

export default ReportIncident;