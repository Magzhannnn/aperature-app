import {
  BusinessActionType,
  BusinessActions,
  IBisunessData,
} from "../../types/bisunessData";

export const getProduct = (product: IBisunessData) => ({
  type: BusinessActionType.GET_RPODUCT,
  payload: product,
});

export const removeProduct = {
  type: BusinessActionType.REMOVE_PRODUCT,
};

const initialState: IBisunessData = {
  id: 0,
  title: "",
  text: "",
  image: "",
  clock: "",
  shape: "",
  iso: 0,
  place: "",
  placeLink: ""
};

export const businessReducer = (
  state = initialState,
  action: BusinessActions
): IBisunessData => {
  switch (action.type) {
    case BusinessActionType.GET_RPODUCT:
      return action.payload;
    case BusinessActionType.REMOVE_PRODUCT:
      return initialState;
    default:
      return state;
  }
};
