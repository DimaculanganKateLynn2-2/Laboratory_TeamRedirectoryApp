import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-xl">
        Page not found.
      </p>

      <Link to="/">
        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;