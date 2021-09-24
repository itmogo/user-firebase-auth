import React, { useState } from "react";
import {signup} from '../actions/authActions';
import { connect } from "react-redux";
//import "./form.css";
import { Redirect} from 'react-router-dom';
//import { Button, Form } from "react-bootstrap";

//user sign up component
function Signup(props) {
  
  const [credentials, setCredentials] = useState({  
    email: "",
    password: "",    
  });

  function handleOnChange(event) {    
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleOnSubmit() {    
    props.signuo(credentials.email, credentials.password);
  }

  //if firebasew isLoaded is false
  //show loading
  if (props.auth.isLoaded === false){
      return <h1>Loading...</h1>;
  }

  //if a user is logged in
  // redirect them to dashboard
  if (props.auth.isEmpty === false){
      return <Redirect path="/" />;
  }

  return (
    <div style={{fontSize: 50}}>
    <h1>Sign Up</h1>
        <form>
            <div>
            <label> Email: </label>
            <input  type="email"  name="email"  onChange={handleOnChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handleOnChange} />
            </div>

            <div>
                <button type="button" onClick={handleOnSubmit}>
                 Sign Up
                </button>
            </div>
        </form>
    
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebaseState.auth,
    };
  }

const mapDispatchToProps = { signup };
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
