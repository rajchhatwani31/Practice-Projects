const initialState = {
  userList: [],
  defaultValue: {},
};
const getUser = (createUser = initialState, action) => {
  switch (action.type) {
    case "GENERATE_USER":
      return { ...createUser, userList: action.payload };

    case "DELETE_USER":
      const actionData = action.payload;
      const dataAfterDeletion = createUser.userList.filter((e) => {
        return e._id !== actionData;
      });
      return { ...createUser, userList: dataAfterDeletion };

    case "EDIT_USER":
      return { ...createUser, defaultValue: action.payload };

    default:
      return createUser;
  }
};

export { getUser };
