import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: username },
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
