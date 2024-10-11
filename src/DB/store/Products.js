// store/reducers/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

export const fetchDocuments = createAsyncThunk("products/get_products", async () => {
  try {
    const colRef = collection(db, "products");

    await getDocs(colRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return newData;
    });

    // const querySnapshot = await getDocs(collection(db, 'products')); // This line is correct now
    // const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    // return newData;
  } catch (error) {
    console.log("Error fetching documents: ", error);
  }
});

export const fetchUser = createAsyncThunk("products/get_user", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "user"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
});

const initialState = {
  products: [],
  user: {},
  loading: false,
  error: null,
  status: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    get_products: (state) => {
      state.value += 1;
    },
    add_products: (state) => {
      state.value -= 1;
    },
    // Add other actions here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocuments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDocuments.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchDocuments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // [fetchUser.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [fetchUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // },
    // [fetchUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // },
  },
});

export const { get_products, add_products } = productsSlice.actions;
export default productsSlice.reducer;
