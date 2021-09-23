import React, { useState } from "react";
import {signup} from '../actions/authActions';
import { connect } from "react-redux";
import "./form.css";
import { Button, Form } from "react-bootstrap";

//user sign up component
function Signup(props) {
  // default user state is an object with empty string as value
  const [credentials, setCredentials] = useState({  
    email: "",
    password: "",    
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component
   // let userId = 10000 + Math.random() * 10000000;
   // let user = { ...state, id: userId };
    props.signuo(credentails.email, credentials.password);
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
          <Button type="button" variant="primary" onClick={handleSubmit}>
            <span>Sign Up</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = { signup };
export default connect(null, mapDispatchToProps)(Signup);
