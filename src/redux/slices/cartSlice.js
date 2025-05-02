import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // [{ productId, name, qty, price, image }]
    total: 0,
  };
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const item = action.payload;
        const existItem = state.items.find(i => i.productId === item.productId);
        if (existItem) {
          existItem.qty += item.qty;
        } else {
          state.items.push(item);
        }
        state.total = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
      },
      removeFromCart(state, action) {
        state.items = state.items.filter(i => i.productId !== action.payload);
        state.total = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
      },
      clearCart(state) {
        state.items = [];
        state.total = 0;
      },
    },
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  