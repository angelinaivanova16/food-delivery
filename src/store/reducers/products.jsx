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
      console.log(payload);
      state.basketProducts.push(payload.payload)
    }
  }
})

export const { addProductsBasket } = productsSlice.actions;

export default productsSlice.reducer;