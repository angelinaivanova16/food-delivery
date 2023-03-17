import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products";

const initialState = {
  products: products,
  basketProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsBasket: (state, payload) => {
      // console.log(payload);
      state.basketProducts.push(payload.payload)
    },
    removeProductsBasket: (state, payload) => {
      console.log(payload);
      state.basketProducts = state.basketProducts.filter((item) => {
        return item.idx !== payload.payload;
      })
    }
  }
})

export const { addProductsBasket, removeProductsBasket } = productsSlice.actions;

export default productsSlice.reducer;