import React, { useEffect, useRef, useState } from "react";
import GoogleSignin from "../../assets/images/btn_google_signin_dark_pressed_web.png";
import Logo from "../../assets/images/logo_radioital_negro.png";
import { auth } from "../../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

const Welcome = () => {
  const [toggle, setToggle] = useState("");
  const expand = toggle ? "open" : "";
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <Fab className="btnChat" variant="extended" onClick={() => {
          setToggle(!toggle);
      } }>
          <ChatIcon sx={{ mr: 1 }} />
          {!toggle ? "ABRIR CHAT" : "CERRAR CHAT" }
      </Fab>
      <div className={`navBox ${expand} chat-box`}>
        <h3>Chat RadioItal.com</h3>
        <img src={Logo} alt="Radioital logo" width={50} height={50} />
        <p className="txt_ini">Conectate al chat de Radioital.com con tu cuenta de Google!</p>
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      </div>
    </>
  );
};

export default Welcome;