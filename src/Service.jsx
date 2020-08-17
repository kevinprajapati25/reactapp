import React from "react";
import web4 from "./images/comp1.jpg";
import web5 from "./images/comp2.jpg";
import web6 from "./images/comp3.jpg";
import web3 from "./images/webdev.jpg";
import web7 from "./images/comp4.jpg";
import web8 from "./images/comp5.jpg";

const Service = () => {
    return ( 
    <>
    <h1 className = "text-center text-capitalize mt-5 ser-heading" > services </h1>
        <div class="container">
  <div class="row pt-5">
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh">
        <img src={web5} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Web Development</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" class="btn btn-primary" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh">
        <img src={web4} class="card-img-top ig1" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Software Development</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/software-requirements-gathering/" class="btn btn-primary" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh ">
        <img src={web3} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Software Security</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/software-architecture-security-the-complete-guide/" class="btn btn-primary" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh">
        <img src={web6} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Web Security</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/the-ultimate-dark-web-anonymity-privacy-security-course/" class="btn btn-primary" target="_blank">
            Get started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh">
        <img src={web7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Android Development</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/the-complete-android-oreo-developer-course/" class="btn btn-primary" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 ">
    <div class="card mt-3 card-sh">
        <img src={web8} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Android Security</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://www.udemy.com/course/hacking-android-apps-lite-edition/" class="btn btn-primary" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
       
      
        
    </>
    );
};

export default Service;