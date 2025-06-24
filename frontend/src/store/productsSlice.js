import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Modern Dashboard UI', price: 29, rating: 4.8, description: 'A sleek dashboard template for web apps.' },
        { id: 2, name: 'E-commerce Theme', price: 19, rating: 4.5, description: 'A modern e-commerce theme for online stores.' },
        { id: 3, name: 'Portfolio Template', price: 15, rating: 4.7, description: 'A stylish portfolio template for developers.' },
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        addProduct(state, action) {
            state.products.push(action.payload);
        },
        removeProduct(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload);
        },
    },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer; 