import React, { useState } from "react";
import {signup} from '../actions/authActions';
import { connect } from "react-redux";
import "./form.css";
import { Redirect} from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

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
    props.signuo(credentails.email, credentials.password);
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
    <div>
      <form>
      <h1>Sign Up</h1>
        <div>
         <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          name="email"
          onChange={handleOnChange} //we setup onchange to call our handle onchange function
          required />
          </Form.Group>

        </div>
               <br />

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            name="password"           
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
           
            required />
        </Form.Group>
        <br /><br />

        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleOnSubmit}>
            <span>Sign Up</span>
          </Button>
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
