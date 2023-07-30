import axios from "axios";

const callApi = async (logObj) => {
  return await axios
    .post("http://urltotest.com", logObj)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e
    });
}

export default callApi;