// src/redux/actions/authActions.js

// import axios from "axios";
import { setUserInfo } from "../slices/authSlice";
import axiosInstance from "../../axiosConfig";

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("https://skillboost-academy.onrender.com/api/users/login", { email, password });

    console.log("Respuesta del backend:", data); // Verifica que el token esté en la respuesta

    dispatch(setUserInfo(data));
    localStorage.setItem("userInfo", JSON.stringify(data));

    return true;
  } catch (error) {
    console.error("Error en login:", error.response?.data?.message || error.message);
    return false;
  }
};

