import React, { useState } from "react";
import web from "../src/images/photo.png"
import {NavLink} from "react-router-dom";


const Home = () => {
    var time2 = new Date().toLocaleTimeString(); 

    const [time ,setTime] = useState(time2);

    const clicks = () => {
        time2 = new Date().toLocaleTimeString();
        setTime(time2);
    }
    setInterval(clicks,1000);


    return (
        <div className="container-fluid">
        <div className="row  main">
       
        <div className="col-md-6 order-2 order-md-1 info pt-lg-0 pt-5">
            <h1 className=" px-5 mt-lg-5 mt-0 head "><h3 className="pb-2 time" onClick="clicks">{time}</h3>We are the best developer of our time <p className="para">We have the best team of developers in the industries...</p></h1>
           
            <NavLink className="get-started " to="/services">Get Started</NavLink>
      
            
            
            
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
            <img src={web} alt="img" className="img-fluid animated"/>
        </div>

        </div>
        </div>

        
    );
}

export default Home;