import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-6">
        <h1 className="text-4xl font-bold text-center text-primary">
          About Dragon News
        </h1>

        <p className="text-lg text-gray-600 text-center">
          Dragon News is a modern online news platform providing the latest
          updates from around the world. We deliver accurate, fast, and reliable
          news to keep our readers informed.
        </p>

        <div className="bg-base-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to provide truthful, unbiased, and up-to-date news.
            We believe in responsible journalism and delivering information that
            matters to people.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            We want to become one of the most trusted digital news platforms in
            the world by maintaining quality journalism and modern technology.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Why Dragon News?</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Fast and reliable news</li>
            <li>Trusted sources</li>
            <li>Modern design</li>
            <li>24/7 updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
