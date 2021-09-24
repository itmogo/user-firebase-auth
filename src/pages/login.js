import React, { useState } from "react";
import { connect } from "react-redux";
//import "./form.css";
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authActions';
//import { Button, Form } from "react-bootstrap";

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
    props.login(credentials.email, credentials.password);
  }

  //if firebase isloaded is false
  //show loading
  if (props.auth.isLoaded === false){
      return <h1>Loading...</h1>
  }

  //if a user is logged in
  //redirect them to dashboard
  if (props.auth.isEmpty === false){
      return <Redirect path="/"  />;
  }

  return (
    <div style={{fontSize: 30}}>
    <h1>Log In</h1>
        <form>
            <div>
            <label> Email: </label>
            <input  type="email" name="email"  onChange={handleOnChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={handleOnChange} />
            </div>
            <div>
                <button type="button" onClick={handleOnSubmit}>
                 Log In
                </button>
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
