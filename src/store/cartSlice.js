import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload; // The item being added
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        // Update quantity and total price for an existing item
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new item with initial quantity and total price
        state.items.push({
          ...item,
          quantity: 1,
          totalPrice: item.price, // Ensure item.price is a valid number
        });
      }

      // Update totalAmount correctly
      state.totalAmount += item.price; // Add the price of the added item
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        // Deduct the item's total price from totalAmount
        state.totalAmount -= item.totalPrice;
        // Remove the item from the cart
        state.items.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price; // Update total price
        state.totalAmount += item.price; // Add the item's price to totalAmount
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price; // Update total price
        state.totalAmount -= item.price; // Subtract the item's price from totalAmount
      } else if (item && item.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        state.totalAmount -= item.totalPrice; // Deduct total price before removing
        state.items = state.items.filter(i => i.id !== itemId);
      }
    },
    clearCart: (state) => {
      // Reset the cart state
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;