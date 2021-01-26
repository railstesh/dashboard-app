const apiBaseURL = 'http://localhost:3000';

export const dashboardService = {
  getDashboardData,
};

async function getDashboardData() {
  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await fetch(`${apiBaseURL}/get-dashboard`, requestOptions);
    if (response.status === 200) {
      return response.json();
    }
  } catch (error) {
    return Promise.reject(error);
  }
}