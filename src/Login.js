import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pbs.twimg.com/profile_images/1607410723227054082/RaQz46j7_400x400.jpg"
          alt="hero-logo"
        />
        <Button variant="outlined" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
