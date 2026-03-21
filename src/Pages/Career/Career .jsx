import Navbar from "../../components/Navbar/Navbar";

const Career = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-4xl font-bold text-center text-primary">
          Career at Dragon News
        </h1>

        <p className="text-center text-gray-600">
          Join our team and help us build the future of digital journalism. We
          are always looking for talented and passionate people.
        </p>

        {/* Why work with us */}
        <div className="bg-base-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Why Work With Us?</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Friendly work environment</li>
            <li>Remote work opportunity</li>
            <li>Learning & growth</li>
            <li>Competitive salary</li>
          </ul>
        </div>

        {/* Jobs */}
        <div className="bg-base-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3">Open Positions</h2>

          <ul className="space-y-2">
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>News Reporter</li>
            <li>Content Writer</li>
          </ul>
        </div>

        {/* Apply */}
        <div className="text-center mt-6">
          <button className="btn bg-primary text-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Career;
