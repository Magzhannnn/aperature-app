import { modalActionType, modalActions } from "../../types/modal";

export const isModal = {
  type: modalActionType.IS_MODAL,
};

export const initModal = {
  type: modalActionType.INIT_MODAL,
};

export const modalReducer = (state = false, action: modalActions): boolean => {
  switch (action.type) {
    case modalActionType.INIT_MODAL:
      return false;
    case modalActionType.IS_MODAL:
      return !state;
    default:
      return state;
  }
};
