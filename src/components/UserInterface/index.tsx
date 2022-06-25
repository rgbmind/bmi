import { useSelector, useDispatch } from 'react-redux';
import BmiOutput from '../BmiOutput';
import Input from '../Input';
import IconButton from '../IconButton';

// IMPORT EVENT HANDLERS
import {
  onGenderButtonClick,
  onAgeChange,
  onAgeButtonClick,
  onWeightButtonClick,
  onHeightButtonClick,
  onWeightChange,
  onHeightChange,
} from '../../handlers';

import './style.scss';

const UserInterface: React.FC = () => {
  // USE AND DISPATCH STATE
  const { gender, age, weight, height, bmi, componentsDisplay } = useSelector(
    (state: any) => state
  );
  const dispatch = useDispatch();

  // JSX

  return (
    <div className='bmi-form-container'>
      <IconButton
        icon='woman'
        label='Gender'
        value={gender}
        onClick={() => onGenderButtonClick(dispatch)}
      />
      <IconButton
        icon='age'
        label='Age'
        onClick={() => onAgeButtonClick(dispatch)}
      />
      {componentsDisplay.ageInput ? (
        <Input
          name='age'
          length={3}
          value={age}
          onChange={(event) => onAgeChange(event, dispatch)}
          readOnly={false}
        />
      ) : null}
      {componentsDisplay.bmiOutput ? <BmiOutput bmiValue={bmi} /> : null}
      {componentsDisplay.weightInput ? (
        <Input
          name='weight'
          length={5}
          value={weight}
          onChange={(event) => onWeightChange(event, dispatch)}
          readOnly={false}
        />
      ) : null}
      {componentsDisplay.heightInput ? (
        <Input
          name='height'
          length={4}
          value={height}
          onChange={(event) => onHeightChange(event, dispatch)}
          readOnly={false}
        />
      ) : null}
      <IconButton
        icon='weight'
        label='Weight'
        onClick={() => onWeightButtonClick(dispatch)}
      />
      <IconButton
        icon='height'
        label='Height'
        onClick={() => onHeightButtonClick(dispatch)}
      />
    </div>
  );
};

export default UserInterface;
