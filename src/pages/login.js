import React, { useState } from "react";
import { login } from '../actions/authActions';
import { connect } from "react-redux";
import "./form.css";
import { Redirect } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

//user sign up component
function Login(props) {
  // default user state is an object with empty string as value
  const [credentials, setCredentials] = useState({  
    email: "",
    password: "",    
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
  
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  
  function handleSubmit() {    
    props.login(credentails.email, credentials.password);
  }

  //if firebase isloaded is false
  //show loading
  if(props.auth.isLoaded === false){
      return <h1>Loading...</h1>
  }

  //if a user is logged in
  //redirect them to dashboard
  if (props.auth.isEmpty === false){
      return <Redirect path="/"  />;
  }

  return (
    <div>
      <form>
        <div>
         <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control 
          type="email" 
          name="email"
          onChange={handleOnChange} //we setup onchange to call our handle onchange function
          required />
          </Form.Group>

        </div>
            

        <Form.Group>
          <Form.Label>Password</Form.Label>
        
          <Form.Control
            type="password"
            name="password"           
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
           
            required />
        </Form.Group>
        <br /><br />

        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            <span>Log In</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {login};

const mapStateToProps = (state) => {
    return { 
        auth: state.firebaseState.auth,
    };    
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
