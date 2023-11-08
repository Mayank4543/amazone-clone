import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
const promise = loadStripe(
  "pk_test_51NEvj9SHSl6vv1agbwgILdFsRj5HT2l4lSg9wYF4H0OFK4Efvuj931GRyKM5sGRI5WEKp0zLPeyVZp5IaWgjPDHX004FD5gLnB"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //  will only run once when the app components loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is>>>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/order" element={[<Header />, <Order />]}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={[<Header />, <Checkout></Checkout>]}
          ></Route>
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment></Payment>
              </Elements>,
            ]}
          ></Route>

          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
