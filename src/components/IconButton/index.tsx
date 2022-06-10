import React from 'react';
import './style.scss';
import icons from '../../icons/icons';

// INTERFACES
interface inputProps {
  icon: 'woman' | 'age' | 'weight' | 'height' | 'checkmark';
  label?: 'Gender' | 'Age' | 'Weight' | 'Height';
  value?: string | number;
  onClick?: React.ReactEventHandler;
}

const IconButton: React.FC<inputProps> = ({ icon, label, value, onClick }) => {
  let selectedIcon: any = {};

  if (value === 'female') {
    selectedIcon = icons('woman', 'icon');
  } else if (value === 'male') {
    selectedIcon = icons('man', 'icon');
  } else {
    selectedIcon = icons(icon, 'icon');
  }

  return (
    <div className='btn-container'>
      <div className='btn' onClick={onClick}>
        {selectedIcon}
      </div>
      {label ? <p className='btn-label'>{label}</p> : null}
    </div>
  );
};

export default IconButton;
