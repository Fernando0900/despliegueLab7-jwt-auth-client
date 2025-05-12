import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/test/`;

const getUserBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return axios.get(API_URL + "user", {
    headers: {
      Authorization: `Bearer ${user?.accessToken}`
    }
  });
};

export default {
  getUserBoard
};
