import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='container-fluid mt-5' style={{backgroundColor:"#212529"}}>
        <div className="container">
          <div className='row'>
            <div className="col-12 text-center py-2">
                  <p className='text-white mt-4 '>Copyright © Your Website 2023</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
