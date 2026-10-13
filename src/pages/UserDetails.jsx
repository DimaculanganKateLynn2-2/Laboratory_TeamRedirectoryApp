import { useParams, Link } from "react-router-dom";
import users from "../data/users";

function UserDetails() {
  const { id } = useParams();

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold">
          User Not Found
        </h1>

        <Link to="/users">
          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-xl bg-white p-8 text-gray-900 shadow-lg">
        <h1 className="mb-6 text-4xl font-bold">
          {user.name}
        </h1>

        <div className="space-y-3">
          <p>
            <strong>Role:</strong> {user.role}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Location:</strong> {user.location}
          </p>

          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
        </div>

        <Link to="/users">
          <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Back to Users
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;