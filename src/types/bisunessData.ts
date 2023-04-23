export interface IBisunessData {
  id: number;
  title: string;
  text: string;
  image: string;
  clock: string;
  shape: string;
  iso: number;
  place: string;
  placeLink: string;
}

export enum BusinessActionType {
  GET_RPODUCT = "GET_RPODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

interface getProduct {
  type: BusinessActionType.GET_RPODUCT;
  payload: IBisunessData;
}

interface removeProduct {
  type: BusinessActionType.REMOVE_PRODUCT;
}

export type BusinessActions = getProduct | removeProduct;
