import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, REGISTER, REHYDRATE, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Stores data in localStorage
import signUpReducer from './features/signup/signUpSlice'
import forgotReducer from "./features/forotPassword/forgotSlice"
// Import your reducers
// import authReducer from "./authSlice"; // Example reducer
// import userReducer from "./userSlice"; // Example reducer

// Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine multiple reducers
const rootReducer = combineReducers({

forgot:forgotReducer,
signUp:signUpReducer
});

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, REHYDRATE, PERSIST],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
