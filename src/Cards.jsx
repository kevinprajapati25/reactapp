import React from "react";
import web3 from "./images/webdev.jpg";
const Cards = () => {
  return (
    <>
      <div class="card">
        <img src={web3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
