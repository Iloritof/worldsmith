import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Star({ data }: RouteProps) {
  return <div>Star</div>;
}
