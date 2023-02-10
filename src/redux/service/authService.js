import axios from "axios";
import { store } from "../../store";
import { setMessage } from "../slices/messageSlice";

const API_URL = "http://localhost:8081/eventuser/";
// fullname, email, password, confirmPassword
const register = async (payload) => {
  alert(payload.fullname);
  try {
    const response = await axios.post(
      API_URL + "create/",
      {
        ...payload,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    store.dispatch(setMessage(response.data));
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(
      API_URL + "login", 
      {
      email,
      password,
    });
    if (response.data.accessToken) {
      alert('I got to the response')
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw(error)
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

export { register, login, logout };

