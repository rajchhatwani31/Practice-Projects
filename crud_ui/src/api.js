import axios from "axios";

export const getApi = async () => {
    try {
        // debugger
      let data = await axios.get(`http://localhost:8080/get`);
    //   debugger
      return data;
    } catch (err) {
        // debugger
      console.log(err);
      return { err };
    }
  };
