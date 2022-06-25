import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculateBMI } from '../utils/calculateBMI';

// DEFINE INITIAL STATE
const initialState = {
  gender: 'female',
  age: 25,
  weight: 60.5,
  height: 1.72,
  bmi: 0,
  componentsDisplay: {
    ageInput: false,
    bmiOutput: true,
    weightInput: false,
    heightInput: false,
  },
};

initialState.bmi = calculateBMI(
  initialState.age,
  initialState.weight,
  initialState.height
);

//CREATE STATE SLICE

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clickGenderButton(state) {
      return {
        ...state,
        gender: state.gender === 'female' ? 'male' : 'female',
      };
    },
    clickAgeButton(state) {
      return {
        ...state,
        componentsDisplay:
          state.componentsDisplay.ageInput === false
            ? {
                ageInput: true,
                bmiOutput: false,
                weightInput: false,
                heightInput: false,
              }
            : { ...state.componentsDisplay, ageInput: false, bmiOutput: true },
      };
    },
    clickWeightButton(state) {
      return {
        ...state,
        componentsDisplay:
          state.componentsDisplay.weightInput === false
            ? {
                weightInput: true,
                ageInput: false,
                bmiOutput: false,
                heightInput: false,
              }
            : {
                ...state.componentsDisplay,
                weightInput: false,
                bmiOutput: true,
              },
      };
    },
    clickHeightButton(state) {
      return {
        ...state,
        componentsDisplay:
          state.componentsDisplay.heightInput === false
            ? {
                heightInput: true,
                weightInput: false,
                ageInput: false,
                bmiOutput: false,
              }
            : {
                ...state.componentsDisplay,
                heightInput: false,
                bmiOutput: true,
              },
      };
    },
    changeAgeInput(state, action) {
      return { ...state, age: action.payload };
    },
    changeWeightInput(state, action) {
      return { ...state, weight: action.payload };
    },
    changeHeightInput(state, action) {
      return { ...state, height: action.payload };
    },
    calculateBmi(state) {
      return {
        ...state,
        bmi: calculateBMI(state.age, state.weight, state.height),
      };
    },
    saveAndClose(state: any) {
      return {
        ...state,
        componentsDisplay: {
          ageInput: false,
          weightInput: false,
          heightInput: false,
          bmiOutput: true,
        },
      };
    },
  },
});

// EXPORT REDUCERS
export const userReducers = userSlice.reducer;

//EXPORT ACTIONS
export const userActions = userSlice.actions;
