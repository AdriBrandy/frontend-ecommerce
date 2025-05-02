"use client";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// // import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { useCart } from "./CartContext";

// export default function CartSlide({ open, setOpen }) {
//   const { cart, dispatch } = useCart();
//   const userInfo = useSelector((state) => state.auth.userInfo);
//   const navigate = useNavigate();

//   const calcularSubtotal = () => {
//     return cart.reduce((total, item) => {
//       const precioConDescuento = item.price * (1 - (item.sale || 0) / 100);
//       return total + precioConDescuento * item.quantity;
//     }, 0);
//   };
//   const calcularDescuentos = () => {
//     return cart.reduce((total, item) => {
//       const precioConDescuento = item.price * (1 - (item.sale || 0) / 100);
//       return (item.price - precioConDescuento) * item.quantity;
//     }, 0);
//   };
//   const handleCheckout = () => {
//     if (!userInfo) {
//       localStorage.setItem("redirectAfterLogin", "/login");
//       navigate("/registro"); // o '/login'
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <Dialog open={open} onClose={setOpen} className="relative z-10">
//       <DialogBackdrop
//         transition
//         className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
//       />

//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//             <DialogPanel
//               transition
//               className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
//             >
//               <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                   <div className="flex items-start justify-between">
//                     <DialogTitle className="text-lg font-medium text-gray-900">
//                       Mi carrito
//                     </DialogTitle>
//                     <div className="ml-3 flex h-7 items-center">
//                       <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
//                       >
//                         <span className="absolute -inset-0.5" />
//                         <span className="sr-only">Cerrar panel</span>
//                         <XMarkIcon aria-hidden="true" className="size-6" />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="mt-8">
//                     <div className="flow-root">
//                       <ul
//                         role="list"
//                         className="-my-6 divide-y divide-gray-200"
//                       >
//                         {cart.map((item) => (
//                           <li key={item.id} className="flex py-6">
//                             <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//                               <img
//                                 alt={item.name}
//                                 src={item.img}
//                                 className="size-full object-cover"
//                               />
//                             </div>
//                             <div className="ml-4 flex flex-1 flex-col">
//                               <div>
//                                 <div className="flex justify-between text-base font-medium text-gray-900">
//                                   <h3>
//                                     <a href={item.href}>{item.name}</a>
//                                   </h3>
//                                   <p className="ml-4">U$s{item.price}</p>
//                                 </div>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   {item.category}
//                                 </p>
//                               </div>
//                               <div className="flex flex-1 items-end justify-between text-sm ">
//                                 <p className="text-gray-500">Cantidad:</p>

//                                 {/* -----------------------------------------Cantidad--------- */}
//                                 <div className="flex items-left">
//                                   <button
//                                     onClick={() =>
//                                       dispatch({
//                                         type: "UPDATE_QUANTITY",
//                                         payload: {
//                                           _id: item._id,
//                                           quantity: item.quantity - 1,
//                                         },
//                                       })
//                                     }
//                                   >
//                                     -
//                                   </button>
//                                   <span className="mx-2">{item.quantity}</span>
//                                   <button
//                                     onClick={() =>
//                                       dispatch({
//                                         type: "UPDATE_QUANTITY",
//                                         payload: {
//                                           _id: item._id,
//                                           quantity: item.quantity + 1,
//                                         },
//                                       })
//                                     }
//                                   >
//                                     +
//                                   </button>
//                                 </div>

//                                 {/* -----------------------------------------fin Cantidad--------- */}
//                                 <button
//                                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                                   onClick={() =>
//                                     dispatch({
//                                       type: "REMOVE_ITEM",
//                                       payload: { _id: item._id },
//                                     })
//                                   }
//                                 >
//                                   Quitar
//                                 </button>
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                   <div className="flex justify-between text-base font-medium text-gray-900">
//                     <p>Subtotal: U$s{calcularSubtotal().toFixed(2)}</p>
//                   </div>
//                   <p className="mt-0.5 text-sm text-gray-500">
//                     Descuentos aplicados: U$s{calcularDescuentos().toFixed(2)}
//                   </p>
//                   <div className="mt-6">
//                     <button
//                       onClick={handleCheckout}
//                       className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
//                     >
//                       Comprar
//                     </button>
//                   </div>
//                   <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                     <p>
//                       or{" "}
//                       <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                       >
//                         Continuar Comprando
//                         <span aria-hidden="true"> &rarr;</span>
//                       </button>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </div>
//     </Dialog>
//   );
// }
"use client";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "./CartContext";

export default function CartSlide({ open, setOpen }) {
  const { cart, dispatch } = useCart();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  const calcularSubtotal = () => {
    return cart.reduce((total, item) => {
      const precioConDescuento = item.price * (1 - (item.sale || 0) / 100);
      return total + precioConDescuento * item.quantity;
    }, 0);
  };

  const calcularDescuentos = () => {
    return cart.reduce((total, item) => {
      const precioConDescuento = item.price * (1 - (item.sale || 0) / 100);
      return (item.price - precioConDescuento) * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (!userInfo) {
      // Guardar que el usuario quiere ir a confirmar compra
      localStorage.setItem("redirectAfterLogin", "/confirmation");
      navigate("/login"); // Redirigimos al login
    } else {
      // Ya logueado → vamos a la confirmación directamente
      navigate("/confirmation") 
      
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Mi carrito
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Cerrar panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cart.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={item.name}
                                src={item.img}
                                className="size-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={item.href}>{item.name}</a>
                                  </h3>
                                  <p className="ml-4">U$s{item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.category}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm ">
                                <p className="text-gray-500">Cantidad:</p>
                                <div className="flex items-left">
                                  <button
                                    onClick={() =>
                                      dispatch({
                                        type: "UPDATE_QUANTITY",
                                        payload: {
                                          _id: item._id,
                                          quantity: item.quantity - 1,
                                        },
                                      })
                                    }
                                  >
                                    -
                                  </button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <button
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
                                <button
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_ITEM",
                                      payload: { _id: item._id },
                                    })
                                  }
                                >
                                  Quitar
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal: U$s{calcularSubtotal().toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Descuentos aplicados: U$s{calcularDescuentos().toFixed(2)}
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleCheckout}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      o{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          navigate("/");
                        }}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

