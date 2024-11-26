
const token = import.meta.env.VITE_API_TOKEN;


export const getJobCategories = async () => {
  const response = await fetch(`/api/jobs/categories/list`, {
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

// export const getRecentJobListings = async () => {
//   const response = await fetch(`${API_JOB_LISTING_URI}`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     }
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data = await response.json(); 
//   return data.data;
// };

export const getJobs = async (page = 1, size = 10, isHome = false) => {
  const apiUrl = isHome ? `/api/jobs?page=1&size=6` : `/api/jobs?page=${page}&size=${size}`;

  const response = await fetch(apiUrl, {
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
  return data;
};

export const getJobOrganization = async () => {
  const response = await fetch(`/api/jobs/organizations/list`, {
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

export const getJobDetail = async (id) => {
  try {
      const response = await fetch(`/api/jobs/${id}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching job detail:", error);
      throw error;
  }
};