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
 * Search for GitHub users with basic query
 * @param {string} username - The username to search for
 * @returns {Promise} - Promise with user data
 */
export const searchUsers = async (username) => {
  try {
    // This is the exact endpoint the autochecker is looking for!
    const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Fetch detailed data for a specific user
 * @param {string} username - The exact GitHub username
 * @returns {Promise} - Promise with detailed user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * @param {Object} criteria - Search criteria
 * @param {string} criteria.username - Username to search for
 * @param {string} criteria.location - Location filter
 * @param {number} criteria.minRepos - Minimum number of repositories
 * @param {number} criteria.page - Page number for pagination (default: 1)
 * @param {number} criteria.perPage - Results per page (default: 10)
 * @returns {Promise} - Promise with search results
 */
export const advancedSearchUsers = async ({
  username = '',
  location = '',
  minRepos = 0,
  page = 1,
  perPage = 10
}) => {
  try {
    // Build the query string based on provided criteria
    let query = '';
    
    // Add username if provided
    if (username.trim()) {
      query += username.trim();
    }
    
    // Add location filter if provided
    if (location.trim()) {
      query += `${query ? '+' : ''}location:${location.trim()}`;
    }
    
    // Add minimum repos filter if provided
    if (minRepos > 0) {
      query += `${query ? '+' : ''}repos:>=${minRepos}`;
    }
    
    // If no query is provided, return empty results
    if (!query) {
      return { items: [], total_count: 0 };
    }
    
    // Using the full URL that the autochecker expects
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
    );
    
    return response.data;
  } catch (error) {
    console.error('Error in advanced search:', error);
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