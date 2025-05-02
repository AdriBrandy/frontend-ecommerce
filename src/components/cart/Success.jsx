import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
    const { state } = useLocation();
    const navigate = useNavigate();
  
    if (!state) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center scroll-mt-auto">
          <p className="text-red-500">No hay datos de compra disponibles.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded"
          >
            Volver al inicio
          </button>
        </div>
      );
    }
  
    const { cart, subtotal, discount, total, date } = state;
    const orderNumber = Math.floor(Date.now() / 1000);
  
    const formattedDate = new Date(date).toLocaleString("es-AR", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">¡Compra realizada con éxito!</h1>
      <p className="text-gray-700 mb-2">Gracias por tu compra.</p>
      <p className="text-gray-500 mb-2">N° de orden: <strong>{orderNumber}</strong></p>
      <p className="text-gray-500 mb-6">Fecha: <strong>{formattedDate}</strong></p>

      <div className="bg-white rounded shadow p-6 w-full max-w-md text-left">
        <h2 className="text-xl font-semibold mb-4">Resumen de la orden:</h2>
        <ul className="divide-y divide-gray-200">
          {cart.map(item => (
            <li key={item._id} className="py-2 flex justify-between">
              <span>{item.name} x{item.quantity}</span>
              <span>U$s {(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-gray-600">Subtotal: U$s {subtotal.toFixed(2)}</p>
          {discount > 0 && (
            <p className="text-red-500">Descuento: -U$s {discount.toFixed(2)}</p>
          )}
          <p className="font-bold mt-2 text-lg">Total pagado: U$s {total.toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded"
      >
        Volver al inicio
      </button>
    </div>
  );
}
  