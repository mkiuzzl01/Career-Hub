const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <img
            src="Assets/images/user.png"
            className="w-3/6 rounded-lg"
          />
          <div className="p-16">
            <h1 className="text-5xl font-bold">One Step Closer To Yours <span className="text-[#9873FF]">Dream Job</span> </h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn bg-[#9873FF] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
