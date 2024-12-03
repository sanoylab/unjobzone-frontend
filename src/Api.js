
const token = import.meta.env.VITE_API_TOKEN;


export const getJobCategories = async () => {
  const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/jobs/categories/list`, {
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

export const getJobs = async (page = 1, size = 10, isHome = false, job_title, duty_station, dept, recruitement_type, start_date, end_date, jn, jf, jc, jl) => {
  // Helper function to construct query string
  const constructQueryString = (params) => {
    return Object.keys(params)
      .filter(key => params[key] !== undefined && params[key] !== null)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  };

  // Construct query parameters
  const queryParams = constructQueryString({
    page: isHome ? 1 : page,
    size: isHome ? 6 : size,
    job_title,
    duty_station,
    dept,
    recruitement_type,
    start_date,
    end_date,
    jn,
    jf,
    jc,
    jl
  });

  // Construct API URL
  const apiUrl = `https://unjobzone-api.onrender.com/api/v1/jobs/filtered/{query}?${queryParams}`;

  // Fetch data from API
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  // Handle response
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};



export const getJobOrganization = async () => {
  const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/jobs/organizations/list`, {
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


export const getDutyStation = async () => {
  const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/jobs/duty_station/list`, {
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
      const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/jobs/${id}`,{
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


export const getBlogs = async () => {
  const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/blogs`, {
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


export const getBlogDetail = async (id) => {
  try {
      const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/blogs/${id}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('response', response);  
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching blog detail:", error);
      throw error;
  }
};


export const getFeaturedBlog = async () => {
  const response = await fetch(`https://unjobzone-api.onrender.com/api/v1/blogs/featured/list`, {
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