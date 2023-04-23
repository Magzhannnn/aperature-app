export enum modalActionType {
  IS_MODAL = "IS_MODAL",
  INIT_MODAL = "INIT_MODAL",
}

interface isModal {
  type: modalActionType.IS_MODAL;
}

interface initModal {
  type: modalActionType.INIT_MODAL;
}

export type modalActions = isModal | initModal
