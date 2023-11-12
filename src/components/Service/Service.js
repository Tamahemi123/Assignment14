// service.js

const axios = require('axios');

// Example service function making an API call
async function fetchDataFromApi(apiEndpoint) {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw error;
  }
}

module.exports = {
  fetchDataFromApi,
  // Add other service functions as needed
};
