import React, { useState } from "react";
import "./LogIn.css";
import SignInScreen from "./SignIn";
import { useHistory } from 'react-router-dom';


const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const history=useHistory()



  return (
    <div className="login__Screen">
      <div className="login__Background">
        <img onClick={() => history.push("/")}
          className="login__Logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="login__Button">
          Sign In
        </button>

        <div className="login_Gradient" />
      </div>

      <div className="login__Body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>
              Ultimate movies, TV <br /> shows and more.
            </h1>
            <h2>watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your emial to create or restart your
              membership.
            </h3>

            <div className="login__input">
              <form action="">
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="get__Started"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
