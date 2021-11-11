import {
  SELECTED_CATEGORY,
  SELECTED_ITEM,
  SET_INPUT_FIELD,
  SET_SELECTED_FIELD,
  SET_SELECTED_CHOICE,
  SET_SELECTED_CREDIT_CARD_INPUT,
  SET_SELECTED_CREDIT_CARD_INPUT_CHOOSEN,
  ALL_CATEGORY,
  ALL_PRODUCTS,
  SET_CURRENT_USER,
  USER_UPDATED,
} from './actionTypes';

export const AllProducts = (Products: any) => {
  return {
    type: ALL_PRODUCTS,
    payload: Products,
  };
};

export const AllCategory = (Category: any) => {
  return {
    type: ALL_CATEGORY,
    payload: Category,
  };
};

export const SelectedCategory = (Category: any) => {
  return {
    type: SELECTED_CATEGORY,
    payload: Category,
  };
};

export const SelectedItem = (Item: any) => {
  return {
    type: SELECTED_ITEM,
    payload: Item,
  };
};

export const InputFields = (Input: any) => {
  return {
    type: SET_INPUT_FIELD,
    payload: Input,
  };
};

export const SetSelectedAddress = (Input: any) => {
  return {
    type: SET_SELECTED_FIELD,
    payload: Input,
  };
};

export const SetSlecetedChoice = (Choice: any) => {
  return {
    type: SET_SELECTED_CHOICE,
    payload: Choice,
  };
};

export const SetSlecetedCreditCardInput = (CreditCardInput: any) => {
  return {
    type: SET_SELECTED_CREDIT_CARD_INPUT,
    payload: CreditCardInput,
  };
};

export const SetSlecetedCreditCardInputChoosen = (
  CreditCardInputChoosen: any,
) => {
  return {
    type: SET_SELECTED_CREDIT_CARD_INPUT_CHOOSEN,
    payload: CreditCardInputChoosen,
  };
};

export const setCurrentUser = (UserObj: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: UserObj,
  };
};

export const setUpdatedUser = (UpdatedCheck: any, UpdatedValue: any) => {

  return {
    type: USER_UPDATED,
    payload: UpdatedValue,
    value: UpdatedCheck,
  };
};
