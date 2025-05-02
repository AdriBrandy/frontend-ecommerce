// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";
// import { useCart } from "../components/cart/CartContext";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/actions/authActions";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { dispatch: cartDispatch } = useCart();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Despachamos la acción de login
//       const user = await dispatch(login({ email, password }));
//       if (user) {
//         // ✅ Guardamos el usuario en localStorage
//         localStorage.setItem("user", JSON.stringify(user));

//         // ✅ Sincronizamos el carrito local
//         try {
//           const localCart = JSON.parse(localStorage.getItem("cartItems")) || [];
//           console.log("Carrito local antes de sincronizar:", localCart);
//           cartDispatch({ type: "SYNC_CART", payload: localCart });
//           localStorage.removeItem("cartItems");
//         } catch (syncError) {
//           console.error("Error al sincronizar el carrito:", syncError);
//         }

//         // ✅ Redirigimos y forzamos refresco para que Navigation actualice
//         const redirect = localStorage.getItem("redirectAfterLogin") || "/";
//         localStorage.removeItem("redirectAfterLogin");
//         console.log("Redirigiendo a:", redirect);

//         // Usamos `window.location.href` para forzar la actualización del estado global.
//         window.location.href = redirect; // 🔄 fuerza que Navigation lea el user actualizado
//       } else {
//         setError("Credenciales inválidas.");
//       }
//     } catch (err) {
//       console.error("Ocurrió un error al iniciar sesión:", err);
//       setError("Ocurrió un error al iniciar sesión.");
//     }
//   };

//   return (
//     <>
     
//       <div className="min-h-screen flex p-7 justify-center bg-gradient-to-b from-gray-900 via-indigo-300 to-indigo-900">
//         <div className="mt-20 max-h-95 max-w-70 rounded-xl border border-zinc-200 bg-white ring-4 ring-zinc-300/25">
//           <div className="flex grow items-center px-6 py-10 sm:px-10 sm:py-4">
//             <div className="grow">
//               <div className="text-center">
//                 <h1 className="text-3xl font-extrabold">Iniciar sesión</h1>
//                 <h2 className="mt-1 text-sm leading-relaxed text-zinc-600">
//                   ¿No tienes cuenta?{" "}
//                   <a
//                     href="/register"
//                     className="text-sm text-zinc-800 underline decoration-slate-300 underline-offset-2 hover:text-zinc-900"
//                   >
//                     Regístrate
//                   </a>
//                 </h2>
//               </div>
//               <form
//                 onSubmit={handleSubmit}
//                 className="mt-2 flex flex-col gap-2 sm:gap-2"
//               >
//                 <div className="space-y-1">
//                   <label className="inline-block text-sm font-medium">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="inline-block text-sm font-medium">
//                     Contraseña
//                   </label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5"
//                   />
//                 </div>
//                 {error && <div className="text-red-500">{error}</div>}
//                 <button
//                   type="submit"
//                   className="w-full mt-5 bg-zinc-800 text-white py-2 px-4 rounded hover:bg-zinc-900"
//                 >
//                   Iniciar sesión
//                 </button>
//                 <div className="text-center text-xs font-medium text-zinc-500 mt-2">
//                   SkillBoost &copy; {new Date().getFullYear()}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useCart } from "../components/cart/CartContext";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dispatch: cartDispatch } = useCart();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Despachamos la acción de login
      const user = await dispatch(login({ email, password }));
      if (user) {
        // ✅ Guardamos el usuario en localStorage
        localStorage.setItem("user", JSON.stringify(user));
        window.dispatchEvent(new Event("userLogin"));
        toast.info("Sesión iniciada correctamente");

        // ✅ Sincronizamos el carrito local
        try {
          const localCart = JSON.parse(localStorage.getItem("cartItems")) || [];
          console.log("Carrito local antes de sincronizar:", localCart);
          cartDispatch({ type: "SYNC_CART", payload: localCart });
          localStorage.removeItem("cartItems");
        } catch (syncError) {
          console.error("Error al sincronizar el carrito:", syncError);
        }

        // ✅ Redirigimos a donde el usuario quería ir antes de loguearse
        const redirect = localStorage.getItem("redirectAfterLogin") || "/";
        localStorage.removeItem("redirectAfterLogin");
        console.log("Redirigiendo a:", redirect);

        // Si no necesitás recargar toda la app, podés usar navigate:
        navigate(redirect);

        // Si preferís que se recargue todo para refrescar el estado global:
        // window.location.href = redirect;
      } else {
        setError("Credenciales inválidas.");
      }
    } catch (err) {
      console.error("Ocurrió un error al iniciar sesión:", err);
      setError("Ocurrió un error al iniciar sesión.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex p-7 justify-center bg-gradient-to-b from-gray-900 via-indigo-300 to-indigo-900">
        <div className="mt-20 max-h-95 max-w-70 rounded-xl border border-zinc-200 bg-white ring-4 ring-zinc-300/25">
          <div className="flex grow items-center px-6 py-10 sm:px-10 sm:py-4">
            <div className="grow">
              <div className="text-center">
                <h1 className="text-3xl font-extrabold">Iniciar sesión</h1>
                <h2 className="mt-1 text-sm leading-relaxed text-zinc-600">
                  ¿No tienes cuenta?{" "}
                  <a
                    href="/register"
                    className="text-sm text-zinc-800 underline decoration-slate-300 underline-offset-2 hover:text-zinc-900"
                  >
                    Regístrate
                  </a>
                </h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mt-2 flex flex-col gap-2 sm:gap-2"
              >
                <div className="space-y-1">
                  <label className="inline-block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5"
                  />
                </div>
                <div className="space-y-1">
                  <label className="inline-block text-sm font-medium">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5"
                  />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                  type="submit"
                  className="w-full mt-5 bg-zinc-800 text-white py-2 px-4 rounded hover:bg-zinc-900"
                >
                  Iniciar sesión
                </button>
                <div className="text-center text-xs font-medium text-zinc-500 mt-2">
                  SkillBoost &copy; {new Date().getFullYear()}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
