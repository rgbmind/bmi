import React from 'react';
import './style.scss';

// INTERFACES
interface formProps {
  children: React.ReactNode;
}

const Form: React.FC<formProps> = ({ children }) => {
  return (
    <form>
      <div className='bmi-form-container'>{children}</div>
    </form>
  );
};

export default Form;
