import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation"; // Si lo tienes en tu estructura
import Footer from "../components/Footer"; // Si lo tienes en tu estructura

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Para redirigir al usuario después del registro

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }
  
    const userData = { name, email, password };
  
    try {
      const response = await axios.post(
        "https://skillboost-academy.onrender.com",
        userData
      );
  
      if (response.status === 201) {
        alert("Usuario creado correctamente.");
        navigate("/login");
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Error en el servidor"
      );
    }
  };
  

  return (
    <>
    
      <div className=" flex p-10 justify-center bg-gradient-to-b from-gray-900 via-indigo-300 to-indigo-900">
        <div className="max-h-135 max-w-100 rounded-xl border border-zinc-200 bg-white ring-4 ring-zinc-300/25">
          <div className="flex grow items-center px-6 py-10 sm:px-10 sm:py-4">
            <div className="grow">
              <div className="text-justify">
                <h1 className="text-2xl font-extrabold">
                  Crea una nueva cuenta
                </h1>
                <h2 className="text-center mt-1 text-sm leading-relaxed text-zinc-600">
                  ¿Ya tienes una cuenta?{" "}
                  <a
                    href="/login"
                    className="text-sm text-zinc-800 underline decoration-slate-300 underline-offset-2 hover:text-zinc-900"
                  >
                    Inicia sesión
                  </a>
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2 sm:gap-2">
                <div className="space-y-1">
                  <label className="inline-block text-sm font-medium">Nombre</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-1.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="inline-block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-1.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="inline-block text-sm font-medium">Contraseña</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-1.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Confirma contraseña</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="block w-full rounded-lg border border-zinc-200 bg-white px-4 py-1.5 text-sm/6 font-medium placeholder-zinc-500 focus:border-zinc-500 focus:ring-3 focus:ring-zinc-500/50 focus:outline-hidden"
                  />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800 px-4 py-3 text-sm leading-5 font-medium text-white hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-zinc-500/50 focus:outline-hidden active:border-zinc-700 active:bg-zinc-700"
                >
                  Registrarse
                </button>
                <div className="text-center text-xs font-medium text-zinc-500">
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

export default Register;
