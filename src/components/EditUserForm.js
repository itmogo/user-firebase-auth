import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserAction } from "../actions/userActions";
import { Button, Form } from "react-bootstrap";

//user sign up component
function EditUserForm(props) {
  // default user state is an object with empty string as value
  const [state, setState] = useState({
    username: props.user.username,
    email: props.user.email,
    password: props.user.password,
    country: props.user.country,
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component

    let user = { ...state, id: props.user.id };
    props.updateUserAction(props.user.id, user);
    props.hideModal();
  }

  return (
    <div>
      <form>
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your name"
              name="username"
              value={state.username} //the value will the same as data in the state
              onChange={handleOnChange} //we setup onchange to call our handle onchange function
              required
            />
          </Form.Group>
        </div>{" "}
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={state.country}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Enter country"
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Your password..."
            required
          />
        </Form.Group>
        <br />
        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Update User 
          </Button>
        </div>
      </form>
    </div>
  );
}

let mapDispatchToProps = {
  updateUserAction,
};

let mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
