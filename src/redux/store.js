import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";
import profileSlice from "./slices/profileSlice";

const persistConfig = {
  key: "kingCubana",
  storage,
};
const reducer = combineReducers({
  signup: signUpSlice,
  login: loginSlice,
  profile: profileSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
export { store, persistor };
