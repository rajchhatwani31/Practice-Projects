import axios from "axios";

export const getApi = async () => {
  try {
    let data = await axios.get(`http://localhost:8080/get`);
    return data;
  } catch (err) {
    console.log(err);
    return { err };
  }
};

export const updateUser = async (updatedData) => {
  try {
    let data = await axios.put(`http://localhost:8080/update`, updatedData);
    return data;
  } catch (error) {
    return { error };
  }
};

export const addUser = async (values) => {
  try {
    let data = await axios.post(` http://localhost:8080/addUser`, values);
    return data;
  } catch (error) {
    return { error };
  }
};

export const deleteUser = async (values) => {
  try {
    let response = await axios.delete(
      `http://localhost:8080/delete?id=${values}`
    );
    return response;
  } catch (error) {
    return error;
  }
};
