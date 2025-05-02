
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  ReceiptPercentIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CartSlide from "./cart/CartSlide";
import { useCart } from "../components/cart/CartContext";
import { toast } from 'react-toastify';


// Dummy Button si no estás usando uno personalizado
const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="ml-4 text-sm/6 font-semibold text-white hover:text-red-400"
  >
    {children}
  </button>
);

const products = [
  {
    name: "Ofertas",
    description: "Aprovecha nuestras ofertas",
    href: "#oferta",
    icon: ReceiptPercentIcon,
  },
  {
    name: "Cursos de Marketing",
    description: "Haz crecer tu negocio",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Cursos de Programación",
    description: "Automatiza tu trabajo",
    href: "#",
    icon: PencilSquareIcon,
  },
];


const Navigation = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const { dispatch: cartDispatch } = useCart();


  useEffect(() => {
    const updateUser = () => {
      const updatedUser = JSON.parse(localStorage.getItem("userInfo"));
      setUser(updatedUser);
      console.log("Usuario actualizado desde evento:", updatedUser);
    };
  
    updateUser(); // Ejecutar al montar
  
    window.addEventListener("userLogin", updateUser); // ✅ Nuevo evento
    window.addEventListener("storage", updateUser);
  
    return () => {
      window.removeEventListener("userLogin", updateUser);
      window.removeEventListener("storage", updateUser);
    };
  }, []);
  
  
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    setUser(null);
    cartDispatch({ type: "CLEAR_CART" }); // ✅ Vacía el carrito en memoria
    toast.info("Sesión cerrada correctamente");
    navigate("/");
  };
  
  

  return (
    <header className="bg-gradient-to-b from-gray-900 via-gray-700 to-gray-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-row lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img src="icon.png" className="h-10 w-auto" alt="logo" />
          </a>
          <a href="/" ><span className="text-white text-xl ml-2 mt-0.5  hover:text-violet-500">
            SkillBoost Academy
          </span></a>
        </div>

        {/* Menú móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-violet-500"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Menú principal */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white hover:text-violet-500">
              Clases
              <ChevronDownIcon className="h-5 w-5 text-white hover:text-violet-500" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
                      <item.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <NavLink
            to="/us"
            className="text-sm font-semibold text-white hover:text-violet-500"
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-semibold text-white hover:text-violet-500"
          >
            Contacto
          </NavLink>
        </PopoverGroup>

        {/* Login/Logout + Carrito */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center text-white">
          {user ? (
            <>
              <UserCircleIcon className="h-6 w-6 mr-2" />
              <span className="font-semibold mr-4">Hola, {user?.name}</span>
              <Button className=" hover:text-violet-500" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <NavLink to="/register" className="mr-4 hover:text-violet-500">
                Crear cuenta
              </NavLink>
              <NavLink to="/login" className="hover:text-violet-500">
                Log in
              </NavLink>
            </>
          )}
          <button
            onClick={() => setCartOpen(true)}
            className="ml-6"
            aria-label="Abrir carrito"
          >
            <ShoppingCartIcon className="h-6 w-6 text-white  hover:text-violet-500" />
          </button>
        </div>
      </nav>

      {/* Diálogo móvil */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white p-6">
          <div className="flex justify-between items-center">
            <a href="/">
              <img src="icon.png" className="h-8 w-auto" alt="logo" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            <Disclosure>
              <DisclosureButton className="flex justify-between w-full text-gray-900 font-semibold">
                Clases
                <ChevronDownIcon className="h-5 w-5" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-1">
                {[...products].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {item.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <NavLink
              to="/us"
              className="block py-2 text-gray-900 font-semibold hover:bg-gray-100"
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-gray-900 font-semibold hover:bg-gray-100"
            >
              Contacto
            </NavLink>
            <div className="mt-4">
              {user ? (
                <>
                  <p className="mb-2 font-semibold">Hola, {user.name}</p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="font-semibold block py-2 hover:text-violet-500"
                  >
                    Crear cuenta
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="font-semibold blockpy-2 hover:text-violet-500"
                  >
                    Log in{" "}
                  </NavLink>{" "}
                </>
              )}
              <button
                onClick={() => setCartOpen(true)}
                className="font-semibold block mt-4 text-sm text-indigo-600"
              >
                Ver carrito
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Carrito */}
      {cartOpen && <CartSlide open={cartOpen} setOpen={setCartOpen} />}
    </header>
  );
};

export default Navigation;
