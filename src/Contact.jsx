import React from "react";

const Contact = () => {
  
  return (
    <>
      <h1 className="text-center text-capitalize contact-into pt-5">
        Contact Us
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  onChange="fname"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword2"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
