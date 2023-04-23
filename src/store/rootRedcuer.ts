import { combineReducers } from "redux";
import { modalReducer } from "./modal/modal-reducer";
import { businessReducer } from "./business/business-reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
  bsProduct: businessReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
