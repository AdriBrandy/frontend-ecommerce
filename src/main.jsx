import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./components/cart/CartContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js"; // o donde esté tu store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </StrictMode>
    
  </Provider>
);
