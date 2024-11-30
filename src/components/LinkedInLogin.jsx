import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkedInLoginIcon from '../assets/linkedinlogin.png'

const LinkedInLogin = () => {
  const LINKEDIN_CLIENT_ID = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
  const LINKEDIN_REDIRECT_URI = import.meta.env.VITE_LINKEDIN_REDIRECT_URI;
  const LINKEDIN_CLIENT_SECRET = import.meta.env.VITE_LINKEDIN_CLIENT_SECRET;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(LINKEDIN_REDIRECT_URI)}&scope=r_liteprofile%20r_emailaddress`;
    console.log('Auth URL:', authUrl); // Debugging line
    window.open(authUrl, '_blank', 'width=600,height=600');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear any stored tokens or user data here if necessary
  };

  const handleSuccess = async (code) => {
    try {
      const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: LINKEDIN_REDIRECT_URI,
          client_id: LINKEDIN_CLIENT_ID,
          client_secret: LINKEDIN_CLIENT_SECRET,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Use the access token to fetch user profile or other LinkedIn API calls
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleSuccess(code);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <a  onClick={handleLogin} className="small__btn d-none d-sm-flex no__fill__btn border-6 font-xs" aria-label="Login Button" data-bs-toggle="modal" data-bs-target="#loginModal"> <i className="fab fa-3x fa-linkedin"></i> Sign in with LinkedIn</a>

        
      )}
    </div>
  );
};

export default LinkedInLogin;