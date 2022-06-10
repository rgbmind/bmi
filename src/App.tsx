import { useEffect, useState, useRef } from 'react';

// COMPONENTS
import Hero from './components/Hero';
import Header from './components/Header';
import Form from './components/Form';
import BmiOutput from './components/BmiOutput';
import Input from './components/Input';
import IconButton from './components/IconButton';

// IMPORT CUSTOM HOOKS
import useWindowHeight from './hooks/useWindowHeight';

// IMPORT EVENT HANDLERS
import {
  onGenderClick,
  onAgeChange,
  onWeightAndHeightChange,
  clickButton,
} from './handlers';

// HELPER FUNCTIONS
import { data } from './data/staticData';

const App = () => {
  // APP STATES
  const [gender, setGender] = useState<string>('female');
  const [age, setAge] = useState<number>(25);
  const [weight, setWeight] = useState<number>(60.5);
  const [height, setHeight] = useState<number>(1.72);
  const [bmi, setBmi] = useState<number>(0);
  const [inputDisplay, setInputDisplay] = useState<any>({
    age: false,
    weight: false,
    height: false,
    bmi: true,
  });

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
    <Hero gender={gender} browserVH={useWindowHeight().height}>
      <Header />
      <Form>
        <IconButton
          icon='woman'
          label='Gender'
          value={gender}
          onClick={(event) => onGenderClick(event, gender, setGender)}
        />
        <IconButton
          icon='age'
          label='Age'
          onClick={() => clickButton('age', inputDisplay, setInputDisplay)}
        />
        {inputDisplay.age ? (
          <Input
            name='age'
            length={3}
            value={age}
            onChange={(event) => onAgeChange(event, setAge)}
            setDisplayInput={setInputDisplay}
            readOnly={false}
          />
        ) : null}
        {inputDisplay.bmi ? <BmiOutput bmiValue={bmi} /> : null}
        {inputDisplay.weight ? (
          <Input
            name='weight'
            length={5}
            value={weight}
            onChange={(event) => onWeightAndHeightChange(event, setWeight)}
            readOnly={false}
            setDisplayInput={setInputDisplay}
          />
        ) : null}
        {inputDisplay.height ? (
          <Input
            name='height'
            length={4}
            value={height}
            onChange={(event) => onWeightAndHeightChange(event, setHeight)}
            readOnly={false}
            setDisplayInput={setInputDisplay}
          />
        ) : null}
        <IconButton
          icon='weight'
          label='Weight'
          onClick={() => clickButton('weight', inputDisplay, setInputDisplay)}
        />
        <IconButton
          icon='height'
          label='Height'
          onClick={() => clickButton('height', inputDisplay, setInputDisplay)}
        />
      </Form>
    </Hero>
  );
};

export default App;
