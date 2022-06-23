import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { slices, actions, initialState } from "./slices";

import { appSaga, appSagaActions } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers(slices);

const rootReducer = (state, action) => {
  if (action.type === "me/logout") {
    state = initialState;
  }
  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(appSaga);

export { actions };
export const sagaActions = appSagaActions;
export default store;
