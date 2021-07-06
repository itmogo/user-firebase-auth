export function getAllUsers(){
  return (dispatch, state, {getFirestore}) => {
    const db = getFirestore();
    db.collection('users')
     .get()
     .then((results) => { 
       let users = [];
       results.forEach((doc) => {
         //console.log(doc.id, doc.data());
         users.push(doc.data());
       });

     dispatch({
       type: 'ADD_ALL_USERS',
       payload: users,
     });
    })
    .catch((err) => {
      console.log(err);
    });
     
  };
}


export function addUserAction(user) {
    return (dispatch,state, {getFirestore}) =>{
        const db = getFirestore();
        db.collection('users')
        .add(user)
        .then(() => {
          //send the data to the store
          dispatch({
            type: 'ADD_USER',
            payload: user,
          });
        })
        .catch ((err) => {
          console.log(err);
        });
       };
  }
  
  export function deleteUserAction(id) {
    return {
      type: 'DELETE_USER',
      payload: id,
    };
  }
  
  export function updateUserAction(id, updatedUser) {
    return {
      type: 'UPDATE_USER',
      payload: { id: id, updatedUserInfo: updatedUser },
    };
  }
  