import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignIn.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="sign_up__Screen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Emial Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" className="sign_Up_Btn" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="sign_Up_Bottom"> New to netflix?</span>
          <span className="sign_Up_BottomLink" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
