import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setUsers([]);

    try {
      if (location || minRepos) {
        const result = await searchUsers(query, location, minRepos);
        if (result.length === 0) {
          setError("Looks like we cant find the user");
        } else {
          setUsers(result);
        }
      } else {
        
        const data = await fetchUserData(query);
        setUserData(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>

      {}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {}
      <div className="mt-6 text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {}
        {userData && !users.length && (
          <div className="mt-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2">{userData.name || userData.login}</h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Profile
            </a>
          </div>
        )}

        {}
        {users.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h2 className="mt-2 text-lg font-medium">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
