import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./components/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
//import Settings from "./pages/Settings";
import { getAllUsers} from './actions/userActions';
import {connect} from 'react-redux';
import React, {Component} from "react";


export class App extends Component {
  // create component did mount to
  // help display data on UI
  componentDidMount(){
    this.props.getAllUsers();
  }
 
  render(){
    return (
      <div
        style={{
          backgroundImage: `url("back1.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        >
  
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path = '/' component = {Home} />             
              <Route exact path = '/signup' component = {Signup} />   
              <Route exact path = '/login' component = {Login} />           
              <ProtectedRoute exact path ='/dashboard' component = {Homepage} />             
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }

 
}
const mapStateToProps = (state)=> ({
 
     users: state.users,
   });

// const mapStateToProps = (state)=> {
//   console.log(state);
//   return {
//     users: state.userState.users,
//   };
// }


//new add
const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);







