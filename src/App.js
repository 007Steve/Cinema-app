import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShowPage from "./Pages/ShowPage";
import Login from "./Pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            picture: authUser.photoURL,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {user ? <HomePage /> : <Login />}
          </Route>
          <Route path="/movies/:id" exact component={ShowPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
