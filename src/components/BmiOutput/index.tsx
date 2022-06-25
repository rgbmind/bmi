import './style.scss';

// BMI, basic categories Category 	BMI (kg/m2)[c]

// Underweight (Severe thinness) 	< 16.0
// Underweight (Moderate thinness) 	16.0 – 16.9
// Underweight (Mild thinness) 	17.0 – 18.4
// Normal range 	18.5 – 24.9
// Overweight (Pre-obese) 	25.0 – 29.9
// Obese (Class I) 	30.0 – 34.9
// Obese (Class II) 	35.0 – 39.9
// Obese (Class III) 	≥ 40.0

// INTERFACES
interface bmiProps {
  bmiValue: number;
}

const BmiCalc: React.FC<bmiProps> = ({ bmiValue }) => {
  // BMI Results Interpretation

  let bmiResultsStyling = 'bmi-result';
  let bmiResults = '';

  if (bmiValue < 16) {
    bmiResults += 'Severe Thinness';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue >= 16 && bmiValue <= 16.9) {
    bmiResults += 'Underweight';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue >= 17 && bmiValue <= 18.4) {
    bmiResults += 'Mild Thinness';
    bmiResultsStyling += ' bmi-result--orange';
  }
  if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    bmiResults += 'Normal';
  }
  if (bmiValue >= 25 && bmiValue <= 29.9) {
    bmiResults += 'Overweight';
    bmiResultsStyling += ' bmi-result--orange';
  }
  if (bmiValue >= 30 && bmiValue <= 34.9) {
    bmiResults += 'Obese Class 1';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue >= 35 && bmiValue <= 39.9) {
    bmiResults += 'Obese Class 2';
    bmiResultsStyling += ' bmi-result--red';
  }
  if (bmiValue >= 40) {
    bmiResults += 'Obese Class 3';
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
