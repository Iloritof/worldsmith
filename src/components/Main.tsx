import introBackground from '../assets/img/planet-horizons.jpg';
import background from '../assets/img/stellar.jpg';

export interface Props {
  children?: React.ReactNode;
}

interface MainProps extends Props {
  introMain?: boolean;
}

const Main = ({ introMain, children }: MainProps) => {
  const exp = introMain ? (
    <main
      className='intro-main'
      style={{
        backgroundImage: `url(${introBackground})`,
      }}
    >
      {children}
    </main>
  ) : (
    <main className='main'>
      <img src={background} alt='background image' />
      {children}
    </main>
  );

  return exp;
};

export default Main;
