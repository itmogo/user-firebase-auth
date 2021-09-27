import React, {useEffect} from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
// new add
import { getAllUsers } from '../actions/userActions';


//this component displays all the users we have in our users state from App.js
function UserList(props) {

  //new add
  useEffect(() => {
    props.getAllUsers();
  }, );
  
  return (
    <div>
      {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
      {props.users.map((user) => (
        <UserItem user={user}         
        />
      ))}
    </div>
  );
}


const mapStateToProps = (state)=> {
  console.log(state);
  return {
    users: state.userState.users,
  };
}

//new add
const mapDispatchToProps = {
  getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
