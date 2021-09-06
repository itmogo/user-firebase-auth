
export const addUserAction =(user) => {
    return (dispatch, state, {getFirestore}) =>{
         getFirestore()
        .collection('users')
        .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((doc) => {})
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
  