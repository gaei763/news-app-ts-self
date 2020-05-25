import { combineReducers, createStore } from "redux";
import { reducer } from "./reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = createStore(persistedReducer, composeWithDevTools());
//const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
