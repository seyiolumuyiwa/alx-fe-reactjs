import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", { username, email, password });
      alert("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        User Registration
      </h2>

      {/* Username */}
      <div>
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={username}            
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={email}               
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={password}            
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
