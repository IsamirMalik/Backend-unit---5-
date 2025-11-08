const Help = () => {
  const emergencyServices = [
    {
      name: "Police",
      number: "100",
      description: "For immediate police assistance, crimes, and security threats"
    },
    {
      name: "Fire Department",
      number: "101",
      description: "For fire emergencies and rescue operations"
    },
    {
      name: "Ambulance / Medical Emergency",
      number: "102",
      description: "For medical emergencies and ambulance services"
    },
    {
      name: "Emergency Helpline",
      number: "108",
      description: "Unified emergency response number (Police, Fire, Medical)"
    },
    {
      name: "Women's Helpline",
      number: "1091",
      description: "24/7 helpline for women in distress"
    },
    {
      name: "Child Helpline",
      number: "1098",
      description: "Emergency helpline for children in need of care and protection"
    },
    {
      name: "Disaster Management",
      number: "1070",
      description: "For disaster-related emergencies and relief"
    },
    {
      name: "Railway Emergency",
      number: "1072",
      description: "For railway-related emergencies"
    },
    {
      name: "Road Accident Emergency",
      number: "1073",
      description: "For road accident emergencies and assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-600 py-8 px-4 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-5xl font-bold text-red-800 pb-8 text-center">
          <h1>Emergency Services</h1>
        </div>
        
        <div className="text-xl text-gray-800 mb-8 text-center px-4">
          <p className="mb-4">
            In case of any emergency, contact the appropriate service immediately. 
            These numbers are available 24/7 for your safety and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {emergencyServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                <div className="bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-lg">
                  {service.number}
                </div>
              </div>
              <p className="text-gray-600 text-base">{service.description}</p>
              <div className="mt-4">
                <a
                  href={`tel:${service.number}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mx-4">
          <h3 className="text-2xl font-bold text-yellow-800 mb-3">Important Reminders</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Only call emergency numbers for genuine emergencies</li>
            <li>Stay calm and provide clear information about your location and situation</li>
            <li>Do not hang up until the operator tells you to do so</li>
            <li>Keep these numbers saved in your phone for quick access</li>
            <li>For non-emergency situations, contact your local authorities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;

