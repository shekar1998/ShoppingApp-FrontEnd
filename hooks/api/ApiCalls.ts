import {
  SelectedCategory,
  SelectedItem,
  InputFields,
  SetSelectedAddress,
  SetSlecetedChoice,
  SetSlecetedCreditCardInput,
  SetSlecetedCreditCardInputChoosen,
  AllCategory,
  AllProducts
} from '../redux/actions';

export function SetAllProducts(dispatch: any, Products: any) {
  dispatch(AllProducts(Products));
}

export function SetCategory(dispatch: any, Category: any) {
  dispatch(AllCategory(Category));
}

export function SetSelectedCategory(dispatch: any, Category: any) {
  dispatch(SelectedCategory(Category));
}

export function SetSelectedItem(dispatch: any, Item: any) {
  dispatch(SelectedItem(Item));
}

export function SetInputFields(dispatch: any, Input: any) {
  dispatch(InputFields(Input));
}

export function SelectedAddress(dispatch: any, Input: any) {
  dispatch(SetSelectedAddress(Input));
}

export function SlecetedChoice(dispatch: any, Choice: any) {
  dispatch(SetSlecetedChoice(Choice));
}

export function SlecetedCreditCardInput(dispatch: any, CardObj: any) {
  dispatch(SetSlecetedCreditCardInput(CardObj));
}

export function SlecetedCreditCardInputChoosen(dispatch: any, ChoosenCard: any) {
  dispatch(SetSlecetedCreditCardInputChoosen(ChoosenCard));
}