import axios from "axios";

// Function to make the API call to refresh the tokens
  async function tokenRefresh() {
    console.log("refresh");
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
        console.error('Błąd podczas wysyłania danych:', error);
    }
  }
  // Function to schedule the API call every 1.5 hours
  function scheduleApiCall() {
    const interval = 1.5 * 60 * 60 * 1000; // 1.5 hours in milliseconds
    // const interval = 1*60*1000; //1 min

    // Call the API immediately when the function is executed
    // tokenRefresh();

    // Set up the interval to call the API repeatedly
    setInterval(tokenRefresh, interval);
  }

export default scheduleApiCall;