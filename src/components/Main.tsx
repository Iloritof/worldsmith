import introBackground from '../assets/img/planet-horizons.jpg';
import background from '../assets/img/stellar.jpg';
import Navbar from './Navbar';

export interface Props {
  children?: React.ReactNode;
}

interface MainProps extends Props {
  introMain?: boolean;
}

const Main = ({ introMain, children }: MainProps) => {
  const exp = introMain ? (
    <div
      className='intro-main'
      style={{
        backgroundImage: `url(${introBackground})`,
      }}
    >
      <Navbar />
      {children}
    </div>
  ) : (
    <>
      <div className='main'>
        <img src={background} alt='background image' />
        {children}
      </div>
    </>
  );

  return exp;
};

export default Main;
