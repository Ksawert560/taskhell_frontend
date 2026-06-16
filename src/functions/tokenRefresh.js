import axios from "axios";

// Function to make the API call to refresh the tokens
  async function tokenRefresh() {
    try {
      let response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/refresh`, null, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("JWT_REFRESH")}`,
          'Content-Type': 'aplication/json'
        }
      });
      const sessionToken = response.data["session token"];
      const refreshToken = response.data["refresh token"];
      localStorage.setItem("JWT_SESSION", sessionToken);
      localStorage.setItem("JWT_REFRESH", refreshToken);
    }
    catch (error) {
        console.error('Error while sending data:', error);
    }
  }
  // Function to schedule the API call every 1.5 hours
  let interval = 0;

  function intervalUpdate(initialInterval) {
    let interval = initialInterval;
    if (isNaN(interval)) {
      console.error("Initial interval is not a valid number.");
      return;
    }
    localStorage.setItem('intervalToken', interval); // Set the initial value
  
    const intervalId = setInterval(() => {
      const storedInterval = localStorage.getItem('intervalToken');
      let currentInterval = storedInterval;
  
      if (isNaN(currentInterval)) {
        console.error("Value in localStorage is not a valid number. Clearing interval.");
        clearInterval(intervalId);
        return;
      }
  
      currentInterval = currentInterval - 1000;
      localStorage.setItem('intervalToken', currentInterval);
  
      if (currentInterval <= 0) {
        clearInterval(intervalId);
        localStorage.removeItem('intervalToken');
      }
    }, 1000);
  }
  

  function scheduleApiCall() {
    if(localStorage.getItem('intervalToken')){
      interval = localStorage.getItem('intervalToken');
    }
    else{
      interval = 1.5 * 60 * 60 * 1000; // 1.5 hours in milliseconds
      localStorage.setItem('intervalToken', interval);
    }
    intervalUpdate(interval);

    // Set up the interval to call the API repeatedly
    setInterval(tokenRefresh, interval);
  }

export default scheduleApiCall;