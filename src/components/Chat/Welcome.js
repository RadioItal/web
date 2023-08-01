import React from "react";
import GoogleSignin from "../../assets/images/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="src/assets/images/logo radioital negro.png" alt="Radioital logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow radioital.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;