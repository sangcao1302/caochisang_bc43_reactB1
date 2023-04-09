import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <div className="row g-5">
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>Fresh new layout</h3>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-collection p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>Free to download</h3>
                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-cloud-download p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>Jumbotron hero header</h3>
                <p>The heroic part of this template is the jumbotron hero header!</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-card-heading p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>Feature boxes</h3>
                <p>We've created some custom feature boxes using Bootstrap icons!</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-bootstrap p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>Simple clean code</h3>
                <p>We keep our dependencies up to date and squash bugs as they come!</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-code p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-sm-4">
            <div className="list-product" style={{maxWidth:"100%"}}>
              <div className="list-item p-5" style={{backgroundColor:"#F8F9FA",position:"relative"}}>
                <h3>A name you trust</h3>
                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                <div className="logo text-center"style={{position:"absolute", top:"-10px",left:"38%"}} >
                   <i className="bi bi-patch-check p-3 fs-4" style={{backgroundColor:"#277DFD",color:"white",borderRadius:"5px"}}></i>
                </div>
              </div>
            </div>
          </div>   
        </div> 
      </div>
    );
  }
}
