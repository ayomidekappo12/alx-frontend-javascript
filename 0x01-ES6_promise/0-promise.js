// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const success = true; // You can modify this based on your API response
      if (success) {
        resolve("API response data"); // Resolve with the actual data from the API
      } else {
        reject(new Error("API request failed")); // Reject with an error if the API request fails
      }
    }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
  });
}

export default getResponseFromAPI;

