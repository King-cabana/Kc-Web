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
    return response;
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
      API_URL_2 + "login",
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

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      API_URL_2 + "forgot-password",
      {
        email,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.accessToken) {
      localStorage.getItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const forgotPasswordOtp = async (otp) => {
  try {
    const response = await axios.get(
      `${API_URL_2}verify-otp?otp=${otp}`);
    if (otp === response.data.otp) {
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (password, confirmPassword, otp) => {
  try {
    const response = await axios.post(
      API_URL_2 + "reset-password",
      {
        password,
        confirmPassword,
        otp,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.accessToken) {
      localStorage.getItem("user", JSON.stringify(response.data));
    }
    console.log(response.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

export {
  register,
  verifyEmail,
  login,
  forgotPassword,
  forgotPasswordOtp,
  resetPassword,
  logout,
};
