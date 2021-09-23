//import logo from './logo.svg';
import React, {Component} from 'react';  
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './components/form.css';
import {getAllUsers} from './actions/userActions';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';


export class App extends Component {
  // create component did mount to
  // help display data on UI

  componentDidMount(){
    this.props.getAllUsers();
  }

    render(){
      return (
        <div style={{                 
          backgroundImage: `url("mitchell.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"     
        }}>
        <div className="container">
          <BrowserRouter>
          <Route path="/" exact component={Dashboard}    />
            <Route path="/login" component={Login} />
            <route path="/signup" component={Signup} />
          </BrowserRouter>
          <div className="row">
            <div className="col-md-5">
            <h4>Users Form</h4>
              <UserForm />
            </div>
    
            <div className="col-md-7">
            <h4>Users List</h4>
              <UserList />
            </div>
          </div>
          
        </div>
        </div>
    
      );
    }  
}

// create map state to props function
const mapStateToProps =(state) =>({
  users: state.users,
});

// create map dispatch to props object
const mapDispatchToProps = {
  getAllUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
