import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkedInCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    if (window.opener) {
      window.opener.postMessage({ type: 'LINKEDIN_AUTH_SUCCESS', code, state }, '*');
      window.close();
    }
  }, [location]);

  return <div>Loading...</div>;
};

export default LinkedInCallback;