import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import profileSlice from "./redux/slices/profileSlice";
import authReducer from "./redux/slices/authSlice";
import messageSlice from "./redux/slices/messageSlice";

const persistConfig = {
  key: "kingCabana",
  storage,
};
const reducer = combineReducers({
  auth: authReducer,
  message: messageSlice,
  profile: profileSlice,
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
