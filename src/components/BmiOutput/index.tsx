import './style.scss';

// INTERFACES
interface bmiProps {
  bmiValue: number;
}

const BmiCalc: React.FC<bmiProps> = ({ bmiValue }) => {
  // BMI Results Interpretation

  let bmiResultsStyling = 'bmi-result';
  let bmiResults = '';

  if (bmiValue <= 16.9) {
    bmiResults += 'Underweight';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue >= 17 && bmiValue <= 18.4) {
    bmiResults += 'Underweight';
    bmiResultsStyling += ' bmi-result--orange';
  }
  if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    bmiResults += 'Normal';
  }
  if (bmiValue >= 25 && bmiValue <= 29.9) {
    bmiResults += 'Overweight';
    bmiResultsStyling += ' bmi-result--orange';
  }
  if (bmiValue >= 30) {
    bmiResults += 'Obese';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue === 0) {
    bmiResults = 'Error';
    bmiResultsStyling += ' bmi-result--red';
  }

  // JSX

  return (
    <div className='bmi-output-container'>
      <div className={bmiResultsStyling}>{bmiResults}</div>
      <p className='bmi-output'>{bmiValue}</p>
      <label className='bmi-label'>BMI</label>
    </div>
  );
};

export default BmiCalc;
