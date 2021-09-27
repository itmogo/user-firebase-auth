import React, { useState } from "react";
import { connect } from "react-redux";
//import "./form.css";
import { Redirect } from 'react-router-dom';
import { loginAction } from '../actions/authActions';
import { Button, Form } from "react-bootstrap";

//user sign up component
function Login(props) {
  // default user state is an object with empty string as value
  const [credentials, setCredentials] = useState({  email: '', password: '' });
  console.log(props.auth);

  //a function that get called anytime an input field changes
  function handleOnChange(event) {  
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  
  function handleOnSubmit() {    
    props.loginAction(credentials.email, credentials.password);
    setCredentials({
      email: "",
      password: ""
    });
  }

  //if firebase isloaded is false
  //show loading
  if (props.auth.isLoaded === false){
      return <h1>Loading...</h1>
  }

  //if a user is logged in
  //redirect them to dashboard
  if (props.auth.isEmpty === false){
      return <Redirect to ="/dashboard"  />;
  }

  return (

    <div className="container">
      <div clasName="row">
       <form>      
         <Form.Group controlId="formBasicEmail">
          <h3 className='text-center'>Log In</h3>           
            <Form.Label> Email: </Form.Label>
            <Form.Control  
                type="email" 
                name="email"  
               // value={credentials.email}
                onChange={handleOnChange} />
                </Form.Group>
          
            <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password" 
                 // value={credentials.password}
                  onChange={handleOnChange} />
                  </Form.Group>
                  <br />
              <br />
            </div>
            <div>
                <Button type="button" variant="primary" onClick={handleOnSubmit}>
                 Log In
                </Button>
            </div>
        </form>      
      </div>
    </div>
  );
}

const mapDispatchToProps = {loginAction};

const mapStateToProps = (state) => {
    return { 
        auth: state.firebaseState.auth,
    };    
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
