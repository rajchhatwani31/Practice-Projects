const initialState = {
  userList: [],
  defaultValue: {},
};
const getUser = (createUser = initialState, action) => {
  switch (action.type) {
    case "GENERATE_USER":
      return { ...createUser, userList: action.payload };

    case "DELETE_DATA":
      const actionData = action.payload;
      const dataAfterDeletion = createUser.userList.filter((e) => {
        return e._id !== actionData;
      });
      return { ...createUser, userList: dataAfterDeletion };

    case "EDIT_USER":
      return { ...createUser, defaultValue: action.payload };

    case "UPDATED_USER":
      return { ...createUser, userList: action.payload };

    case "ADDED_USER":
      let list = createUser.userList;
      list.push(action.payload);
      return { ...createUser, userList: list };

    default:
      return createUser;
  }
};

export { getUser, initialState };
