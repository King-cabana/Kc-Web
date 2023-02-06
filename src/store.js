import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import loginSlice from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";
import profileSlice from "./slices/profileSlice";

const persistConfig = {
  key: "kingCabana",
  storage,
};
const reducer = combineReducers({
  signup: signUpSlice,
  login: loginSlice,
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
