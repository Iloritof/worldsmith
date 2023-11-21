import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Satellite({ data }: RouteProps) {
  return <div>Satellite</div>;
}
