import { data } from '../../data/staticData';

// BMI FUNCTION
export const calculateBMI = (age: number, weight: number, height: number) => {
  if (
    height >= data.shortestPerson &&
    height <= data.tallestPerson &&
    age <= data.longestAge &&
    age >= 1 &&
    weight <= data.heaviestPerson
  ) {
    const bmiFormula = Math.ceil((weight / (height * height)) * 10) / 10;
    return bmiFormula;
  } else {
    return 0;
  }
};
