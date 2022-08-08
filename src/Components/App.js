import { BrowserRouter, Navigate } from "react-router-dom";
import "../Styles/App.css";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Checkout from "../Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import { useEffect } from "react";
import { auth } from "../Firebase";
import { useStateValue } from "../StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "../Components/Orders";

const promise = loadStripe(
  "pk_test_51LJILySBqNKloSLDojoTqYuQAlWhXPzaRNlXvUmJMfKLVipyaVdnTqK66fOfmVmURG0vWCOV06JipKufirs0qaO600orPnEb94"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("USER IS>>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
