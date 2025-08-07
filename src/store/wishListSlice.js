import { createSlice } from "@reduxjs/toolkit";
import reducer from "./cartSlice";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: []
  },
  reducers: {
    toggleWishList: (state, action) => {
      const existing = state.wishlist.find(p => p.id === action.payload.id);
      if (existing) {
        state.wishlist = state.wishlist.filter(p => p.id !== action.payload.id)
      } else{
        state.wishlist.push(action.payload);
      }
    }
  }
})

export const { toggleWishList } = wishListSlice.actions
export default wishListSlice.reducer;
