//import logo from './logo.svg';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
 
import '../App.css';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';



function Dashboard (props){
    function handleLogout(){
        props.logout();
    }

      return (
        <div style={{                 
          backgroundImage: `url("mitchell.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"     
        }}>
        <div className="container">
              <div className="row">
            <div className="col-md-5">
            <button
                type="button"
                style={{backgroundColor: 'red', color: 'white'}}
                onClick = { handleLogout }            
            >
                Log Out
            </button>
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

    const mapDispatchToProps = { logout };
    export default connect(null, mapDispatchToProps)(Dashboard);
