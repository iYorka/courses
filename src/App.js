import React from 'react';
import Posts from "./pages/Posts";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      {/*</Switch>*/}
    </BrowserRouter>
  );
};

export default App;