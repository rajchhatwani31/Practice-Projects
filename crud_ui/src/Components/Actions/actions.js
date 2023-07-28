export const addUser = (payload) => {
  return {
    type: "ADD_USER",
    payload: payload,
  };
};

export const addedUser = (payload) => {
  return {
    type: "ADDED_USER",
    payload: payload,
  };
};
export const remove = (payload) => {
  return {
    type: "DELETE_USER",
    payload: payload,
  };
};

export const removedData = (payload) => {
  return {
    type: "DELETE_DATA",
    payload: payload,
  };
};

export const edit = (payload) => {
  return {
    type: "EDIT_USER",
    payload: payload,
  };
};

export const get = (payload) => {
  return {
    type: "GET_DATA",
    payload: payload,
  };
};

export const generateUserAction = (payload) => {
  return {
    type: "GENERATE_USER",
    payload: payload,
  };
};

export const updateUser = (payload) => {
  return {
    type: "UPDATE_USER",
    payload: payload,
  };
};

export const updateUserAction = (payload) => {
  return {
    type: "UPDATED_USER",
    payload: payload,
  };
};
