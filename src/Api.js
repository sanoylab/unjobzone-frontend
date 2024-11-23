const API_JOB_CATEGORIES_LIST_URI = `${import.meta.env.VITE_API_URI}/jobs/categories/list`;
const API_JOB_LISTING_URI = `${import.meta.env.VITE_API_URI}/jobs?page=1&size=6`;

const token = import.meta.env.VITE_API_TOKEN;


export const getJobCategories = async () => {
  const response = await fetch(`${API_JOB_CATEGORIES_LIST_URI}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();  
  return data.data;
};

export const getRecentJobListings = async () => {
  const response = await fetch(`${API_JOB_LISTING_URI}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json(); 
  return data.data;
};