import React, { useState } from "react";
import "../Styles/Login.css";
import logo from "../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useStateValue } from "../StateProvider";

function Login() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ basket, user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error == "FirebaseError: Firebase: Error (auth/user-not-found).") {
          alert("This email is not registered. Create an account first.");
        } else {
          alert(error);
        }
        console.log("ERROR:", error);
      });
  };

  const register = (e) => {
    e.preventDefault(); //prevents refresh
    const dbRef = doc(db, "users", user?.uid);
    const data = {
      email: email,
      name: fname,
    };
    setDoc(dbRef, data)
      .then((docRef) => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);

        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (
          error == "FirebaseError: Firebase: Error (auth/email-already-in-use)."
        ) {
          alert("This email is already in use. Try with a different one.");
        } else {
          alert(error);
        }
        console.log("ERROR:", error);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="" className="login_logo" />
      </Link>
      <div className="login_container">
        <h1>Welcome {fname}</h1>
        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={fname}
            onChange={(f) => setFname(f.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(p) => setPassword(p.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Crafton's{" "}
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
            {" "}
            Privacy Notice.{" "}
          </a>
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
