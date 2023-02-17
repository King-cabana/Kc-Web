import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import profileSlice from "./redux/slices/profileSlice";
import messageSlice from "./redux/slices/messageSlice";
import otpSlice from "./redux/slices/otpSlice";

const persistConfig = {
  key: "kingCabana",
  storage,
};
const reducer = combineReducers({
  message: messageSlice,
  profile: profileSlice,
  otp: otpSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export { store, persistor };
