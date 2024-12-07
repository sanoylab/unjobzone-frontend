import React, { useState } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

function LinkedInPage() {
  return (
    <LinkedIn
      clientId="78lg6hcbemud94"
      redirectUri={`${window.location.origin}/linkedin`}
      scope="email profile"
      onSuccess={(code) => {
        console.log('Login successful, code:', code);
        window.close(); // Close the popup after successful login
      }}
      
      onError={(error) => {
        console.error('Login error:', error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
      )}
    </LinkedIn>
  );
}

export default LinkedInPage;