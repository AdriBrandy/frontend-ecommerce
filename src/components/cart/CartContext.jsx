import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_ITEM":
      return state.filter((item) => item._id !== action.payload._id);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "SYNC_CART":
      const itemsToAdd = action.payload;
      const updatedCart = [...state];

      itemsToAdd.forEach((item) => {
        const exists = updatedCart.find((i) => i._id === item._id);
        if (!exists) {
          updatedCart.push(item);
        }
      });

      return updatedCart;

    case "CLEAR_CART": // ✅ Agregado
      return [];
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // Inicializa desde localStorage
  const initialCart = () => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  };

  const [cart, dispatch] = useReducer(cartReducer, [], initialCart);

  // Guarda en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado
export const useCart = () => useContext(CartContext);
