import React from 'react';
import capitalize from '../../utils/CapitalizeStr';
import './style.scss';

// APP DATAs
import { data } from '../../data/staticData';

// INTERFACES
interface inputProps {
  name: string;
  length?: number;
  bottomLabel: string;
  value: string | number;
  onClick?: React.ReactEventHandler;
  onChange?: React.ReactEventHandler;
  readOnly?: boolean;
}

const Input: React.FC<inputProps> = ({
  name,
  length,
  bottomLabel,
  value,
  onClick,
  onChange,
  readOnly,
}) => {
  // INPUT ERROR HANDLING

  // Age range
  let errLabel = '';
  let errClassInput = '';
  let errClassLabel = '';

  if (name === 'age') {
    if (value > data.longestAge || value < 1) {
      errLabel = `1 - ${data.longestAge}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
    } else {
      errLabel = capitalize(name.toLowerCase());
    }
  }

  // Weight range
  if (name === 'weight') {
    if (value < 1 || value > data.heaviestPerson) {
      errLabel = `1 - ${data.heaviestPerson}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
    } else {
      errLabel = capitalize(name.toLowerCase());
    }
  }

  // Heigh range
  if (name === 'height') {
    if (value < data.shortestPerson || value > data.tallestPerson) {
      errLabel = `${data.shortestPerson} - ${data.tallestPerson}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
    } else {
      errLabel = capitalize(name.toLowerCase());
    }
  }

  return (
    <div className={`input-container ${errClassLabel}`}>
      <label
        className={`bmi-input-label ${errClassLabel}`}
        htmlFor={name.toLowerCase()}
      >
        {bottomLabel}
      </label>
      <input
        id={name.toLowerCase()}
        className={`bmi-input ${errClassInput}`}
        value={value}
        type='text'
        maxLength={length}
        onClick={onClick}
        onChange={onChange}
        readOnly={readOnly}
      />
      <label className={`bmi-input-label ${errClassLabel}`} htmlFor='gender'>
        {errLabel}
      </label>
    </div>
  );
};

export default Input;
