import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products";

const initialState = {
  products: products,
  basketProducts: [],
  countProducts: 0,
  countPrice: 0,
  descriptionProduct: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsBasket: (state, payload) => {
      state.basketProducts.push(payload.payload);
      state.countProducts = state.basketProducts.length;
      state.countPrice = state.basketProducts.reduce((acc, current) => {
        return acc + parseInt(current.price.split(/\s+/).join(''));
      }, 0)
    },
    removeProductsBasket: (state, payload) => {
      state.basketProducts = state.basketProducts.filter((item) => {
        return item.idx !== payload.payload;
      })
      state.countProducts = state.basketProducts.length;
      state.countPrice = state.basketProducts.reduce((acc, current) => {
        return acc + parseInt(current.price.split(/\s+/).join(''));
      }, 0)
    },
    showProductDescription: (state, payload) => {
      state.descriptionProduct.push(payload.payload);
      console.log(payload.payload)
    },
    clearDescription: (state) => {
      // state.descriptionProduct.pop();
    }
  }
})

export const { addProductsBasket, removeProductsBasket, showProductDescription, clearDescription } = productsSlice.actions;

export default productsSlice.reducer;