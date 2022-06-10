// EVENT HANDLERS
import { BaseSyntheticEvent, ReactEventHandler, SetStateAction } from 'react';
import { transformString } from '../utils/TransformStr';

// EVENT HANDLERS

export const onGenderClick = (
  event: BaseSyntheticEvent,
  gender: string,
  f: React.Dispatch<SetStateAction<string>>
) => {
  if (gender === 'female') {
    f('male');
  }
  if (gender === 'male') {
    f('female');
  }
};

export const onAgeChange = (
  event: BaseSyntheticEvent,
  f: React.Dispatch<SetStateAction<number>>
) => {
  // Clean input string
  const inputString = event.target.value
    .replace(/[^0-9]/gim, '') // remove any non-numeric values
    .replace(/^00/, '0'); // remove multiple zeros at start

  // Remove zero before number at start
  const removeZeroBeforeNumber = inputString.replace(
    /^0[1-9]/,
    inputString.slice(1)
  );

  f(removeZeroBeforeNumber);
};

export const onWeightAndHeightChange = (
  event: any,
  f: React.Dispatch<SetStateAction<number>>
) => {
  f(transformString(event.target.value));
};

// BUTTON CLICK HANDLER

export const clickButton = (name: string, value: object, f: any) => {
  let object = { ...value };

  const objKeys = Object.keys(object);
  const objValues = Object.keys(object);

  if (value[name] === false) {
    for (let i = 0; i < objKeys.length; i++) {
      if (objKeys[i] === name) {
        object[name] = true;
      }
      if (objKeys[i] !== name) {
        object[objKeys[i]] = false;
      }
    }
  }

  if (value[name] === true) {
    object[name] = false;
    object['bmi'] = true;
  }

  f(object);
};
