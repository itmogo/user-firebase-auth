//import logo from './logo.svg';
//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'; 
//import '../App.css';
import UserForm from './UserForm';
import UserList from './UserList';

 class Homepage extends Component{ 
    constructor(props){
      super(props)
    }    
    
    handleLogout= () =>{
        this.props.logout();
    };
    
    render(){
      return (
        <div style={{                 
          backgroundImage: `url("back1.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"     
        }}>
        <div className="container">
              <div className="row text-right" style={{ padding: 22}}>
            
            <button
                type="button"
                style={{backgroundColor: 'red', color: 'white'}}
                onClick = {this.handleLogout }            
            >
                Log Out
            </button>
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
        </div>   
      );
    }
      
    }  
  

    const mapDispatchToProps = { 
        logout,
     };
    export default connect(null, mapDispatchToProps)(Homepage);
