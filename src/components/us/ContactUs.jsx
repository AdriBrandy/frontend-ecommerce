import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ohm9o86", // Reemplazar
        "template_zo35s17", // Reemplazar
        form.current,
        "Z8woxWOiZpfTr8wCe" // Reemplazar
      )
      .then(
        (result) => {
          toast.info("Mensaje enviado con éxito! ✅");
          form.current.reset();
        },
        (error) => {
          toast.info("Error al enviar el mensaje! ❌");
          console.error(error.text);
        }
      );
  };
  return (
    <>
      <div className="min-h-screen max-w-screen-lg mx-auto p-7">
        <div className="grid grid-cols-1 md:grid-cols-12 border ">
          <div className="bg-gray-900 md:col-span-4 p-7 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              SkillBoost Academy
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Ponte en <span className="text-indigo-600">Contacto</span>
            </h3>
            <p className="mt-4 text-left leading-5 text-gray-200">
              ¿Dudas? ¿Sugerencias?
            </p>
            <p className="mt-4 text-justify leading-7 text-gray-200">
              No dudes en ponerte en contacto con nosotros. Tenemos un equipo de
              soporte listo para ayudarte las 24hs todos los dias.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="md:col-span-8 p-7">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  name="first_name"
                  type="text"
                  placeholder="Juan"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Apellido
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="last_name"
                  type="text"
                  placeholder="Ej: Lopez"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  name="email"
                  type="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="tucorreo@****.com"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Tu mensaje
                </label>
                <textarea
                  rows="10"
                  name="message"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="flex justify-center w-full px-3">
                
                <button
                  className=" shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUs;