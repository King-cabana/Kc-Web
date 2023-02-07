import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (fullname, email, password, confirmPassword) => {
  return axios.post(API_URL + "signup", {
    fullname,
    email,
    password,
    confirmPassword,
  });
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
