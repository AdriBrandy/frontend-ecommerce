import React from "react";
import { useCart } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = cart.reduce((acc, item) => {
    const itemDiscount =
      item.sale > 0 ? item.price * item.quantity * (item.sale / 100) : 0;
    return acc + itemDiscount;
  }, 0);

  const total = subtotal - discount;
  const handleConfirmPurchase = () => {
    navigate("/success", {
      state: {
        cart,
        subtotal,
        discount,
        total,
        date: new Date().toISOString(),
      },
    });
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 scroll-mt-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Resumen de Compra</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row border-b border-gray-300 py-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-1 capitalize">
                  {item.category}
                </p>
                <div className="flex items-center mt-2">
                  <span className="mr-2 text-gray-600">Cantidad:</span>
                  <div className="flex items-center border rounded px-2">
                    <button
                      className="px-2 text-lg"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            _id: item._id,
                            quantity: Math.max(item.quantity - 1, 1),
                          },
                        })
                      }
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 text-lg"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            _id: item._id,
                            quantity: item.quantity + 1,
                          },
                        })
                      }
                    >
                      +
                    </button>
                  </div>

                  <span className="ml-auto font-bold text-indigo-600">
                    U$s {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-red-500 italic text-sm">
                    {item.sale > 0 ? `Descuento ${item.sale} %` : ""}
                  </p>
                  <button
                    className="text-sm text-red-600 hover:text-red-800 underline"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { _id: item._id },
                      })
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Totales */}
          <div className="mt-8 max-w-md ml-auto space-y-2 text-right">
            <div className="text-gray-600">
              Subtotal: ${subtotal.toFixed(2)}
            </div>

            {discount > 0 && (
              <div className="text-red-600">
                Descuento: -U$s {discount.toFixed(2)}
              </div>
            )}
            <div className="text-xl font-bold">
              Total a pagar: U$s {total.toFixed(2)}
            </div>
          </div>

          {/* Botón de confirmación */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleConfirmPurchase}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
