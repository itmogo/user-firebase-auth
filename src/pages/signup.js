import React, { useState } from "react";
import { signupAction } from "../actions/authActions";
import { connect } from "react-redux";
//import "./form.css";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

//user sign up component
function Signup(props) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  function handleOnChange(event) {
    setCredentials({
         ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  //this function will be called the the create user button is clicked on
  function handleOnSubmit() {
    props.signupAction(credentials.email, credentials.password);
    //newadd
    setCredentials({
      email: "",
      password: ""
    });
    
  };

  //if firebase isLoaded is false
  //show loading
  if (props.auth.isLoaded === false) {
    return <h1>Loading...</h1>;
  }

  //if a user is logged in
  // redirect them to dashboard
  if (props.auth.isEmpty === false) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div class="container">
      <div class="row">
      <form>
        <div>
          <Form.Group controlId="formBasicEmail">
            <h1 className='text-center'>Sign Up</h1>          
              <Form.Label> Email: </Form.Label>
              <Form.Control
                type="email" 
                name="email" 
               value={credentials.email}
                onChange={handleOnChange} />
               </Form.Group>
            </div>
            <div>
              <br />
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleOnChange}
              />
              </Form.Group>
              <br />
              <br />
            </div>
            <div>
              <Button type="button" variant="primary" onClick={handleOnSubmit}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseState.auth,
  };
};

const mapDispatchToProps = {
  signupAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
