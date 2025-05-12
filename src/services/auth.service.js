import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password, roles) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    roles
  });
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

const AuthService = {
  register,
  login,
  logout
};

export default AuthService;
