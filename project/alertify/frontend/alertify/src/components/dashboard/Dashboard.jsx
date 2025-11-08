const Home = () => {
  return (
    <div className="h-screen bg-linear-to-b from-gray-300 to-gray-600 py-6 flex flex-col  sm:py-12">      
    <div className="text-6xl font-bold text-red-800 pb-8 text-center">
      <h1>Alerts , that saves Lives</h1>
    </div>
    <div className="text-3xl   text-gray-900 px-24 text-center flex flex-col justify-center gap-6 font-serif ">
      <p>When every second counts, Alertify empowers communities to act swiftly and stay connected. Our platform makes it simple to report incidents, coordinate emergency responses, and deliver timely alerts to authorities and community members.</p>
      <p>
        Whether it’s a fire, medical emergency, or natural disaster, we ensure that help is mobilized fast and that everyone stays informed. More than just a response tool, we foster community awareness and engagement, turning neighborhoods into networks of safety and support.
      </p>
      <p>
        Together with Alertify , we can build safer, stronger communities .
      </p>
    </div>
    </div>
  )
};

export default Home;