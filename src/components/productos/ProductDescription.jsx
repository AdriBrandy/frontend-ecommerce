import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../cart/CartContext";
import { useState } from "react"; 


export default function ProductDescription({ open, setOpen, product, onShowCartSlide }) {

  const { dispatch } = useCart();


  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    onShowCartSlide(); // esta línea activa el CartSlide desde ProductCard
  };
  
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Cerrar</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                alt={product.name}
                src={product.img}
                className="w-full rounded-lg object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-4 text-gray-700">{product.description}</p>
                <p className="mt-4 text-xl text-gray-900">
                  Precio U$s {product.price}
                </p>
                <p className="text-lg text-gray-900">
                  Vacantes: {product.stock}
                </p>
                <button
                  type="submit"
                  onClick={handleAddToCart}
                  className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
        
      </div>
    </Dialog>
  );
}
