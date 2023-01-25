import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  updatedAt: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
  totalPrice: number;
  itemsQuantity: number;
}

let cartItems = null;

if (typeof window !== "undefined") {
  const items = JSON.parse(localStorage.getItem("@MKS:cart") || "[]");

  if (items) {
    cartItems = items;
  }
}

const total = cartItems?.reduce((acc: number, item: Product) => {
  return acc + item.price * item.quantity;
}, 0);

const itemsQuantity = cartItems?.reduce((acc: number, item: Product) => {
  return acc + item.quantity;
}, 0);

const initialState: CartState = {
  cart: cartItems || [],
  totalPrice: total || 0,
  itemsQuantity: itemsQuantity || 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductCart: (state, action) => {
      try {
        const product = action.payload;
        const productIndex = state.cart.findIndex(
          (item) => item.id === product.id
        );
        if (productIndex >= 0) {
          state.cart[productIndex].quantity += 1;
        } else {
          state.cart.push({ ...product, quantity: 1 });
        }

        const totalPerItem = state.cart.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        state.totalPrice = totalPerItem;

        const totalItems = state.cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);

        state.itemsQuantity = totalItems;

        localStorage.setItem("@MKS:cart", JSON.stringify(state.cart));
      } catch (error) {
        console.log(error);
      }
    },
    incrementProductCart: (state, action) => {
      try {
        const product = action.payload;
        const productIndex = state.cart.findIndex(
          (item) => item.id === product.id
        );

        if (productIndex >= 0) {
          state.cart[productIndex].quantity += 1;
        }

        const totalPerItem = state.cart.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        state.totalPrice = totalPerItem;

        const totalItems = state.cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);

        state.itemsQuantity = totalItems;

        localStorage.setItem("@MKS:cart", JSON.stringify(state.cart));
      } catch (error) {
        console.log(error);
      }
    },
    decrementProductCart: (state, action) => {
      try {
        const product = action.payload;
        const productIndex = state.cart.findIndex(
          (item) => item.id === product.id
        );

        if (productIndex >= 0) {
          state.cart[productIndex].quantity -= 1;
        }

        if (state.cart[productIndex].quantity === 0) {
          state.cart.splice(productIndex, 1);
        }

        const totalPerItem = state.cart.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        state.totalPrice = totalPerItem;

        const totalItems = state.cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);

        state.itemsQuantity = totalItems;

        localStorage.setItem("@MKS:cart", JSON.stringify(state.cart));
      } catch (error) {
        console.log(error);
      }
    },
    clearCart: (state) => {
      try {
        state.cart = [];
        state.totalPrice = 0;
        state.itemsQuantity = 0;

        localStorage.setItem("@MKS:cart", JSON.stringify(state.cart));
      } catch (error) {
        console.log(error);
      }
    },
    deleteProductCart: (state, action) => {
      try {
        const product = action.payload;
        const productIndex = state.cart.findIndex(
          (item) => item.id === product.id
        );

        if (productIndex >= 0) {
          state.cart.splice(productIndex, 1);
        }

        const totalPerItem = state.cart.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        state.totalPrice = totalPerItem;

        const totalItems = state.cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);

        state.itemsQuantity = totalItems;

        localStorage.setItem("@MKS:cart", JSON.stringify(state.cart));
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {
  addProductCart,
  clearCart,
  decrementProductCart,
  incrementProductCart,
  deleteProductCart,
} = cartSlice.actions;

export default cartSlice.reducer;
