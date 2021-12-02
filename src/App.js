import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "./firebase/index.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoute } from "./hooks/route.js"

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const route = useRoute(isAuth);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsAuth(user);
      setIsLoading(false);
    });
  }, []);

  if(isLoading) return <h2>...Loading</h2>

  return (
    <div className="App">
      <Router>
        {route}
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
