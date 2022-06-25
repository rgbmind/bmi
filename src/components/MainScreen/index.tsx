import { useSelector } from 'react-redux';

// IMPORT CUSTOM HOOKS
import useWindowHeight from '../../hooks/useWindowHeight';

import './style.scss';

// INTERFACES
interface heroProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<heroProps> = ({ children }) => {
  const { gender } = useSelector((state: any) => state);

  // Image toggle based on gender type

  let genderHeroClass = 'hero';

  if (gender === 'female') {
    genderHeroClass += ' hero--female';
  }
  if (gender === 'male') {
    genderHeroClass += ' hero--male';
  }

  return (
    <div
      style={{ height: useWindowHeight().height }}
      className={genderHeroClass}
    >
      {children}
    </div>
  );
};

export default MainScreen;
