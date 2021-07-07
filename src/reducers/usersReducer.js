const initalState = { users: [] };
 
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case 'ADD_ALL_USERS':
      let users = action.payload;
      return {users: users};

    case 'ADD_USER':
      let newUsers = [...state.users, action.payload];
      return { users: newUsers };

    case 'DELETE_USER':
      var id = action.payload;
      let usersAfterDelete = state.users.filter((user) => user.id !== id);
      return { users: usersAfterDelete };

    case 'UPDATE_USER':
      // eslint-disable-next-line no-redeclare
      var id = action.payload.id;
      let updatedUserInfo = action.payload.updatedUserInfo;
      let usersAfterUpdate = state.users.map((user) => {
        if (user.id === id) {
          return updatedUserInfo;
        }
        return user;
      });
      return { users: usersAfterUpdate };
    default:
      return state;
  }
}
