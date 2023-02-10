import axios from "axios";
import { store } from "../../store";
import { setMessage } from "../slices/messageSlice";

const API_URL = "http://localhost:8081/eventuser/";
const API_URL_2 = "http://localhost:8081/";

const register = async (payload) => {
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

const verifyEmail = async (otp) => {
  try {
    console.log("otp");
    const response = await axios.put(
      API_URL + "verify-email",
      {
        otp,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (otp === response.data.otp) {
      console.log(response);
      // store.dispatch(setMessage(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password, final = () => null) => {
  try {
    const response = await axios.post(
      'API_URL_2 + "login"',
      {
        email,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.accessToken) {
      alert("I got to the response");
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  } finally {
   final();
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

export { register, verifyEmail, login, logout };
