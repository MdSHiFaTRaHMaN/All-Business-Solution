import Mission from "../../assets/mission-removebg-preview.png"
const OurMission = () => {
  return (
    <div className="w-full lg:w-10/12 mx-auto p-5">
      <div className="text-center">
        <span className="text-sm text-yellow-700">GOAL OF COMPANY</span>
        <h1 className="text-3xl font-semibold">OUR MISSION</h1>
      </div>
      <div className="grid lg:flex justify-center gap-5">
        <div className="mt-7">
          <p className="my-6 leading-relaxed">
            Software Company mission is to become a market leader by
            consistently exceeding our Customer's expectations; providing them
            with best of breed technology solutions like business management
            system, any kind of software solutions, web development e.t.c.
          </p>
          <p className="leading-relaxed">
            We will continually communicate with, and learn from our Customers,
            in order to improve our products and services. And, we will keep on
            top of today's and tomorrow's technology, no matter how fast it
            moves, to ensure our customers always have the best tools/solutions
            available to them with efficient cost and due time.
          </p>
        </div>
        <img src={Mission} alt="" width={500} className="rounded-md" />
      </div>
    </div>
  );
};

export default OurMission;
