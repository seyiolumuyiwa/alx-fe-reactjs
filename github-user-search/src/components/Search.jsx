import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username);
      setUser(data);
      setError(null);
    } catch {
      setUser(null);
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {user && (
        <div className="mt-4">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl mt-2">{user.name || user.login}</h2>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
