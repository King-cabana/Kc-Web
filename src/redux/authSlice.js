import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

// export const registerUser = createAsyncThunk('registeruser', async (body) => {
//     const res = await fetch("https://kingcabana-event.herokuapp.com/eventuser/create", {
//         method: "post",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body)
//     })
//     return await res.json();
// })
export const apiFetch = createAsyncThunk(
  "apiFetch",
  async ({ body, method, url }) => {
    const res = await fetch("https://kingcabana-event.herokuapp.com/" + url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  }
);

// export const signInUser = createAsyncThunk('signinuser', async (body) => {
//     const res = await fetch("https://kingcabana-event.herokuapp.com/login", {
//         method: "post",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body)
//     })
//     return await res.json();
// })

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, _action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, _action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, _action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // [registerUser.pending]: (state, _action) => {
    //     state.loading = true
    // },
    // [registerUser.fulfilled]: (state, { payload: { error, msg } }) => {
    //     state.loading = false;
    //     if (error) {
    //         state.error = error
    //     }
    //     else {
    //         state.msg = msg
    //     }
    // },
    // [registerUser.rejected]: (state, _action) => {
    //     state.loading = true;
    // },

    // [signInUser.pending]: (state, _action) => {
    //     state.loading = true
    // },
    // [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
    //     state.loading = false;
    //     if (error) {
    //         state.error = error;
    //     } else {
    //         state.msg = msg;
    //         state.token = token;
    //         state.user = user;

    //         localStorage.setItem('msg', msg)
    //         localStorage.setItem('user', JSON.stringify(user))
    //         localStorage.setItem('token', token)
    //     }

    // },
    // [signInUser.rejected]: (state, _action) => {
    //     state.loading = true;
    // },

    [apiFetch.pending]: (state, _action) => {
      state.loading = true;
    },
    [apiFetch.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
    [apiFetch.rejected]: (state, _action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
