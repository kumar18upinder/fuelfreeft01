import axios from "axios";
import { gapi } from "gapi-script";
import config from "../utils/config";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const GoogleLogins = () => {
  const navigate = useNavigate()
  const [loginButton, setLoginButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(false);

  const cleintId = config.googleClientId;
  useEffect(() => {
    function start() {
      gapi.client.init({   
        clientId: cleintId,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const onLoginSuccess = async(response) => {
    console.log("Login Success:", response.profileObj);
    const googleObj = response.profileObj
    const data = {
      userEmail: googleObj.email,
      googleId: googleObj.googleId,
      profilePic: googleObj.imageUrl,
      userName: googleObj.name,
    }
    
    try {
      let res = await axios.post(
        "https://app.fuelfree.in/user/google-login", data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let result = await res.data;
      let userinfo = result.user_details;
      let userToken = result.token;
      if (result.success === "success") {
        localStorage.setItem("token", userToken);
        localStorage.setItem("user", JSON.stringify(userinfo));
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error)
      toast.error("Incorrect credentials");
    }
    setLoginButton(false);
    setLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Failure Success:", res);
  };

  const onSignoutSuccess = () => {
    setLoginButton(true);
    setLogoutButton(false);
  };
  
  return (
    <>
    <ToastContainer/>
      {loginButton ? (
        <GoogleLogin 
          clientId={cleintId}
          buttonText="Login with Google"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : onSignoutSuccess}

      {logoutButton ? (
        <GoogleLogout
          clientId={cleintId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </>
  );
};

export default GoogleLogins;

