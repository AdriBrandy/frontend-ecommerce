import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // Cambiá esto si usás otro puerto

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

export const getOffers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products/offers");
      return response.data;
    } catch (error) {
      console.error("Error al traer ofertas:", error);
      return [];
    }
  };
  