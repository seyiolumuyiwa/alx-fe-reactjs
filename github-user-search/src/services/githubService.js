import axios from "axios";

const BASE_URL = "https://api.github.com";


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const searchUsers = async (query, location, minRepos) => {
  try {
   
    let searchQuery = query ? query.trim() : "";

    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    if (!searchQuery) throw new Error("Please enter a search term.");


    const url = `https://api.github.com/search/users?q=${searchQuery}`;

    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error("Error performing advanced search:", error);
    throw error;
  }
};
