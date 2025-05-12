import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/auth/`;

const register = (username, email, password, roles) => {
  return axios.post(API_URL + "signup", { username, email, password, roles });
};

const login = (username, password) => {
  return axios.post(API_URL + "signin", {
    username,
    password
  });
};


const logout = () => {
  localStorage.removeItem("user");
};

export default { register, login, logout };
