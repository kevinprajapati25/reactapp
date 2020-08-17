import React from "react";
import web2 from "./images/team.png";

import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container-fluid">
          <div className="row  main">
            <div className="col-md-6 order-2 order-md-1 info pt-lg-0 pt-5">
              <h1 className=" px-5 mt-lg-5 mt-0 head head2 ">
                
                About Our Team
                <p className="para ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lorem suscipit, maximus libero a, efficitur sem. Nulla vitae ipsum nec urna vehicula pellentesque. Suspendisse ut massa accumsan, varius magna in, eleifend arcu. Nulla rhoncus rutrum mauris, ac rutrum nibh...
                </p>
                <NavLink to="/">
                     <Button variant="contained" color="primary">Go back</Button>
                </NavLink>
               
              </h1>
             
            </div>
            <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
         
                <img src={web2} alt="" className="img-fluid photo"/>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
