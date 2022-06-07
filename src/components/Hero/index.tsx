import './style.scss';

// INTERFACES
interface heroProps {
  gender: string;
  children: React.ReactNode;
}

const Hero: React.FC<heroProps> = ({ gender, children }) => {
  // Hero image toggle based on gender type

  let genderHeroClass = 'hero';

  if (gender === 'female') {
    genderHeroClass += ' hero--female';
  }
  if (gender === 'male') {
    genderHeroClass += ' hero--male';
  }

  return <div className={genderHeroClass}>{children}</div>;
};

export default Hero;
