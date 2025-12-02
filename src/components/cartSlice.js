import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};


const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};



export const fetchItems = createAsyncThunk("/item/listing", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});
export const fetchItem = createAsyncThunk("/item/listin", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    loading: false,
    error: false,
    list: [],
    detail: {},
    loading1: false,
    error1: false,
    count: 1,
    cart: loadFromLocalStorage("cart", []),
    wish: loadFromLocalStorage("wish", []),
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    addToWish: (state, action) => {
      const item = action.payload; // The item to add
      // console.log("Adding item:", item);

      const existingItem = state.wish.find(
        (cartItem) => cartItem.id === item.id
      );

      if (!existingItem) {

        state.wish.push(item);
        saveToLocalStorage("wish", state.wish);
      }

      console.log("Updated cart:", state.wish);
    },
    removeFromCart:(state, action)=>{
      const itemId = action.payload
      const filteredArray = state.cart.filter((ele)=>ele.id!==itemId)
      state.cart = filteredArray
      saveToLocalStorage("cart", state.cart);
    },
    removeFromWish: ( state, action) => {
      const itemId = action.payload
      const filteredArray = state.wish.filter((ele)=>ele.id!==itemId)
      state.wish = filteredArray
      saveToLocalStorage("wish", state.wish);
    },
    addToCart: (state, action) => {
      const item = action.payload; // The item to add
      console.log("Adding item:", item);

      // Check if the item already exists in the cart
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        const updatedArray = state.cart.map((ele) => {
          if (ele.id == item.id) {
            return item;
          } else {
            return ele;
          }
        });
        state.cart = updatedArray;
      } else {
        // If it's a new item, add it with quantity 1
        state.cart.push(item);
      }
      saveToLocalStorage("cart", state.cart);
      console.log("Updated cart:", state.cart);
    },

    //   (cartData) => {
    //     const sameItem = cart.find(ele => ele?.id === cartData.id)
    //     if (!sameItem) {
    //         setCart(prev => [...prev, cartData])
    //     } else {

    //         const updatedCard = cart.map(ele => {
    //             if (ele.id === cartData.id) {
    //                 return cartData
    //             } else {
    //                 return ele
    //             }
    //             // setCart(prev=>[...prev,cartData])
    //         })
    //         setCart(updatedCard)
    //     }

    // }
    increase: (state) => {
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count === 1 ? 1 : state.count - 1;
    },
    decrement: (state) => {
      console.log(state);
      // OUTPUT - { value: 1, loading: false, error: false, list: [] }
      state.value -= 1;
    },
    reset1: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = false;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.loading = false;
      state.list = [];
      state.error = true;
    });
    builder.addCase(fetchItem.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.loading1 = false;
      state.detail = action.payload;
      state.error1 = false;
    });
    builder.addCase(fetchItem.rejected, (state) => {
      state.loading1 = false;
      state.detail = {};
      state.error1 = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  reset1,
  increase,
  decrease,
  addToCart,
  addToWish,
  removeFromWish,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
