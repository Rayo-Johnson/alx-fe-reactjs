import axios from 'axios';

// Get the API base URL from environment variables
const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create an axios instance with default config
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    // Add authorization header if API key exists
    ...(API_KEY && { 'Authorization': `token ${API_KEY}` })
  }
});

/**
 * Search for GitHub users
 * @param {string} username - The username to search for
 * @returns {Promise} - Promise with user data
 */
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific user
 * @param {string} username - The username to get details for
 * @returns {Promise} - Promise with detailed user data
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

/**
 * Get user's repositories
 * @param {string} username - The username to get repos for
 * @returns {Promise} - Promise with user's repositories
 */
export const getUserRepos = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}/repos?sort=updated&per_page=5`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repos:', error);
    throw error;
  }
};

export default githubAPI;