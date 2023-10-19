import { Props } from "./Main";

interface ButtonProps extends Props {
  type: string;
}

const Button = ({ type, children }: ButtonProps) => {
  const btnType = type ? type : "large";

  return <a className={`btn btn--${btnType} h4 tc-p bc-l`}>{children}</a>;
};

export default Button;
