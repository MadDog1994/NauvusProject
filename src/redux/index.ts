import { createStore, applyMiddleware } from "redux";
import authSaga from "./auth/saga";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

export const store = createStore(rootReducer, applyMiddleware(rootSaga));

rootSaga.run(authSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
