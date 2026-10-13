import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-center">
      <h1 className="mb-4 text-5xl font-bold">
        Team Directory App
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-500">
        Welcome to our team directory. Browse the members of our team
        and learn more about them.
      </p>

      <Link to="/users">
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          View Team Members
        </button>
      </Link>
    </div>
  );
}

export default Home;