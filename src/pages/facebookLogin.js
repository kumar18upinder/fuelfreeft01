import React, { useEffect } from 'react';

const FacebookLogins = () => {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '947998359806201',
        cookie: true,
        xfbml: true,
        version: 'v13.0'
      });
    };

    // Trigger the SDK script loading
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const handleClick = () => {
    // Trigger the Facebook login process
    window.FB.login(checkLoginStatus);
  };

  const checkLoginStatus = (response) => {
    if (response.authResponse) {
      console.log(response.authResponse.accessToken); // Access token for API calls
      window.FB.api('/me', { fields: 'name,email,picture' }, (userResponse) => {
        console.log(userResponse); // User details
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  };

  return (
    <button onClick={handleClick}>Login with Facebook</button>
  );
};

export default FacebookLogins;