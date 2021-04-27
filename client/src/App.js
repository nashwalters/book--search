import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

const App = () => {
  return ( 
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          {/* <Route path="/search">
            <Search/>
          </Route> */}
          <Route path="/saved">
            <Saved/>
          </Route>
          <Route path="/">
            <Search/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}
 
export default App;


