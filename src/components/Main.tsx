import background from "../assets/img/planet-horizons.jpg";
import Navbar from "./Navbar";

export interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <div
      className="intro-bg"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
