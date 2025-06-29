import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.totalAmount += item.price * item.quantity;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;