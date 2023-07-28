const initialState = {
  userList: [],
  // defaultValue : []
};
const getUser = (createUser = initialState, action) => {
  console.log(action);
  console.log(createUser);
  switch (action.type) {
    case "CREATE_USER":
      return { ...createUser, userList: action.payload };

    case "DELETE_USER":
      const actionData = action.payload;
      const dataAfterDeletion = createUser.userList.filter((e) => {
        return e._id !== actionData;
      });
      return { ...createUser, userList: dataAfterDeletion };
    default:
      return createUser;
  }
};
// const removeReducer = (createUser = initialState, action) => {
//   console.log(action);
//   console.log(createUser);
//   switch (action.type) {
//     case "DELETE_USER":

//     default:
//       return createUser;
//   }
// };
//  const userOperation = (createUser = initialState, action) => {

//     console.log(action);
//     console.log(createUser);
//     switch (action.type) {
//         case 'CREATE_USER':
//             return ({...createUser, userList: action.payload })
//         default:
//             return createUser
//     }
// }

export { getUser };
