import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
      state.totalQuantity--;
      state.totalPrice -= action.payload.price * action.payload.quantity;
    },
    clearCart(state) {
      state.cart = [];
      state.items = [];
      state.totalPrice = "";
    },
    increaseItemQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (itemIndex!== -1) {
        state.items[itemIndex].quantity++;
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
      }
    },
    decreaseItemQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (i) => i.id === action.payload.id
      );
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity--;
        state.totalQuantity--;
        state.totalPrice -= action.payload.price;
      }
    },
  },
});


export const {
    addToCart,
    getCartTotal,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;