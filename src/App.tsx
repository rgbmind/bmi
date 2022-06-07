import { BaseSyntheticEvent, SetStateAction, useEffect, useState } from 'react';

// COMPONENTS
import Hero from './components/Hero';
import Header from './components/Header';
import Form from './components/Form';
import BmiOutput from './components/BmiOutput';
import Input from './components/Input';

// IMPORT EVENT HANDLERS
import {
  onGenderClick,
  onAgeChange,
  onWeightAndHeightChange,
} from './handlers';

// HELPER FUNCTIONS
import { transformString } from './utils/TransformStr';
import { data } from './data/staticData';

const App = () => {
  // APP STATES
  const [gender, setGender] = useState<string>('female');
  const [age, setAge] = useState<number>(25);
  const [weight, setWeight] = useState<number>(60.5);
  const [height, setHeight] = useState<number>(1.72);
  const [bmi, setBmi] = useState<number>(0);

  // BMI FORMULA & VALIDATION
  const calculateBMI = () => {
    if (
      height >= data.shortestPerson &&
      height <= data.tallestPerson &&
      age <= data.longestAge &&
      age >= 1 &&
      weight <= data.heaviestPerson
    ) {
      const bmiFormula = Math.ceil((weight / (height * height)) * 10) / 10;
      setBmi(bmiFormula);
    } else {
      setBmi(0);
    }
  };

  // STATE UPDATE
  useEffect(() => {
    calculateBMI();
  }, [weight, height, age]);

  // APP JSX

  return (
    <Hero gender={gender}>
      <Header />
      <Form>
        <Input
          name='gender'
          length={6}
          bottomLabel='select'
          value={gender}
          onClick={(event) => onGenderClick(event, setGender)}
          readOnly={true}
        />
        <Input
          name='age'
          length={3}
          bottomLabel='years'
          value={age}
          onChange={(event) => onAgeChange(event, setAge)}
          readOnly={false}
        />
        <BmiOutput bmiValue={bmi} />
        <Input
          name='weight'
          length={5}
          bottomLabel='kg'
          value={weight}
          onChange={(event) => onWeightAndHeightChange(event, setWeight)}
          readOnly={false}
        />
        <Input
          name='height'
          length={4}
          bottomLabel='m'
          value={height}
          onChange={(event) => onWeightAndHeightChange(event, setHeight)}
          readOnly={false}
        />
      </Form>
    </Hero>
  );
};

export default App;
