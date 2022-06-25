import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../reducers';
import capitalize from '../../utils/capitalizeStr';
import icons from '../../icons/icons';
import './style.scss';

// APP DATAs
import { data } from '../../data/staticData';

// INTERFACES
interface inputProps {
  name: string;
  length?: number;
  value: string | number;
  onClick?: React.ReactEventHandler;
  onChange?: React.ReactEventHandler;
  readOnly?: boolean;
  //setDisplayInput: any;
}

const Input: React.FC<inputProps> = ({
  name,
  length,
  value,
  onChange,
  readOnly,
  //setDisplayInput,
}) => {
  // STATE
  const { age, weight, height, bmi } = useSelector(
    (state: any) => state.componentsDisplay
  );
  const dispatch = useDispatch();

  // INPUT ERROR HANDLING

  let errLabel = '';
  let errClassInput = '';
  let errClassLabel = '';
  let iconClass = '';
  let icon = '';

  // Age range
  if (name === 'age') {
    if (value > data.longestAge || value < 2) {
      errLabel = `2 - ${data.longestAge}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
      iconClass = 'icon-reject';
      icon = 'checkmark';
    } else {
      errLabel = capitalize(name.toLowerCase());
      iconClass = 'icon-confirm';
      icon = 'checkmark';
    }
  }

  // Weight range
  if (name === 'weight') {
    if (value < 1 || value > data.heaviestPerson) {
      errLabel = `1 - ${data.heaviestPerson}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
      iconClass = 'icon-reject';
      icon = 'checkmark';
    } else {
      errLabel = capitalize(name.toLowerCase());
      iconClass = 'icon-confirm';
      icon = 'checkmark';
    }
  }

  // Heigh range
  if (name === 'height') {
    if (value < data.shortestPerson || value > data.tallestPerson) {
      errLabel = `${data.shortestPerson} - ${data.tallestPerson}`;
      errClassInput += 'bmi-input--red';
      errClassLabel += 'bmi-input-label--red';
      iconClass = 'icon-reject';
      icon = 'checkmark';
    } else {
      errLabel = capitalize(name.toLowerCase());
      iconClass = 'icon-confirm';
      icon = 'checkmark';
    }
  }

  //Save data and return to main screen
  const saveAndReturn: any = () => {
    dispatch(userActions.saveAndClose());
  };

  return (
    <div className={`input-container ${errClassLabel}`}>
      <div
        onClick={iconClass === 'icon-confirm' ? saveAndReturn : null}
        className='back'
      >
        {icons(icon, iconClass)}
      </div>
      <input
        id={name.toLowerCase()}
        className={`bmi-input ${errClassInput}`}
        value={value}
        type='text'
        maxLength={length}
        onChange={onChange}
        readOnly={readOnly}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        }}
      />
      <label
        className={`bmi-input-label ${errClassLabel}`}
        htmlFor={name.toLowerCase()}
      >
        {name === 'gender' ? 'Gender' : errLabel}
      </label>
    </div>
  );
};

export default Input;
