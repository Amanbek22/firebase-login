import { Switch, Route } from "react-router-dom";
import Header from "../components/header.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";

export const useRoute = (isAuth) => {
  if (!!isAuth) {
    return (
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    )
  } else {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </>
    )
  }
}