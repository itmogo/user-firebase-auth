import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import { connect } from 'react-redux';
import { deleteUserAction } from '../actions/userActions';
import './form.css';


//this component represents a single user that's displayed in the
//userlist component
function UserItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="row item_down">
        <div className="col-md-3"><b>Username</b><br/>
      <div className="col-md-3">{props.user.username}</div>
      </div>
      <div className="col-md-3"><b>Email</b><br/>
      <div className="col-md-3">{props.user.email}</div>
      </div>
      <div className="col-md-3"><b>Country</b><br/>
      <div className="col-md-3">{props.user.country}</div>
      </div>
      
      <div className="col-md-3">
       <p className="col-md-3 "><b>Action</b>
       <div className="down">
        <Button
         variant="success btn-xs"
          className="editbtn action" 
          onClick={showModal}
          >
          Update</Button>
        {/* We setup edit user modal */}
        
        <Modal show={isModalVisible} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserForm user={props.user} hideModal={hideModal} />
          </Modal.Body>
        </Modal>
        <Button variant="danger btn-xs" className="action"
          onClick={() => {
            props.deleteUserAction(props.user.id);
          }} >
          Delete
        </Button>
        </div>
        </p>
      </div>
    </div>
  );
}

  let mapDispatchToProps = {
  deleteUserAction,
};

 let mapStateToProps = () => {};

 export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
