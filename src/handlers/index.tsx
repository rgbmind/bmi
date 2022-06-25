// EVENT HANDLERS
import { BaseSyntheticEvent, ReactEventHandler, SetStateAction } from 'react';

import { userActions } from '../reducers';

import { transformString } from '../utils/TransformStr';

// EVENT HANDLERS

export const onAgeChange = (event: BaseSyntheticEvent, f: any) => {
  // Clean input string
  const inputString = event.target.value
    .replace(/[^0-9]/gim, '') // remove any non-numeric values
    .replace(/^00/, '0'); // remove multiple zeros at start

  // Remove zero before number at start
  const removeZeroBeforeNumber = inputString.replace(
    /^0[1-9]/,
    inputString.slice(1)
  );

  f(userActions.changeAgeInput(removeZeroBeforeNumber));
  f(userActions.calculateBmi());
};

export const onWeightChange = (event: any, f: any) => {
  f(userActions.changeWeightInput(transformString(event.target.value)));
  f(userActions.calculateBmi());
};
export const onHeightChange = (event: any, f: any) => {
  f(userActions.changeHeightInput(transformString(event.target.value)));
  f(userActions.calculateBmi());
};

// BUTTON CLICK HANDLER

export const onGenderButtonClick = (f: any) => {
  f(userActions.clickGenderButton());
};
export const onAgeButtonClick = (f: any) => {
  f(userActions.clickAgeButton());
};
export const onWeightButtonClick = (f: any) => {
  f(userActions.clickWeightButton());
};
export const onHeightButtonClick = (f: any) => {
  f(userActions.clickHeightButton());
};
