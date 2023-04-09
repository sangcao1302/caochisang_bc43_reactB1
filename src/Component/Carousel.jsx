import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="container mt-5" style={{height:"400px",backgroundColor: "#F8F9FA"}}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
          <div
            className="carousel text-center "
            style={{
              
                padding:"40px",
              maxHeight:"100%",
            }}
          >
            <h1 className="display-5 fw-bold" style={{ color: "#212529" , }}>
              A warm welcome!
            </h1>
            <p className="fs-4" style={{ color: "#212529" }}>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "200px", height: "50px" }}
            >
              Call to action
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
