import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      //   <div className="container-fluid" style={{ backgroundColor: "black" }}>
      //     <div className="container p-2">
      //       <div className="d-sm-flex" style={{justifyContent:"space-between"}}>
      //         <div className="logo" >
      //           <h1 className="text-light fs-4">Start Bootstrap</h1>
      //         </div>

      //           <nav className="nav mt-1 mx-5" >
      //             <a href="#" className="text-light text-decoration-none mx-2">
      //               Home
      //             </a>
      //             <a
      //               href="#"
      //               className="text-secondary text-decoration-none mx-2"
      //             >
      //               About
      //             </a>
      //             <a
      //               href="#"
      //               className="text-secondary text-decoration-none mx-2"
      //             >
      //               Contact
      //             </a>
      //           </nav>
      //         </div>
      //       </div>
      //     </div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container d-flex" >
          <a className="navbar-brand text-white fs-4" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse"style={{marginLeft:"79%"}} id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                 Contact
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
