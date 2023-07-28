export const create = (payload) => {
  return {
    type: "CREATE_USER",
    payload: payload,
  };
};
export const remove = (payload) => {
  return {
    type: "DELETE_USER",
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


