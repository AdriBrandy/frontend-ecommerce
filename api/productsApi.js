import axios from "axios";
// src/api/productsApi.js
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products`);
  const data = await res.json();
  return data;
};

export const getOffers = async () => {
  const res = await fetch(`${BASE_URL}/api/products/offers`);
  const data = await res.json();
  return data;
};