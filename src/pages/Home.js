import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
         backgroundImage: `url("background.jpg")`, 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width:"100%",
          height:"100%"


        }}
      >
        <div className="container">
          <div className="row">
            <h3 className="text-center">Home Navigation</h3>
            <div className="col-md-6">
              <h4 className="text-center"><Link to='/signup'>Sign Up</Link></h4>
            </div>

            <div className="col-md-6">
              <h4 className="text-center"><Link to = '/login'>Log In</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
