import React from 'react';
import Navbar from './Navbar';
import { Switch, Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";


import "./index.css";


const App = () => {
    return (
        <>
        
        <Navbar />
        
        <Switch>
            <Route  exact path="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path = "/contact" component={Contact}/>
            <Route path = "/services" component={Service}/>
            <Redirect to="/" />
        </Switch>      
        
        </>
    )
}

export default App;
