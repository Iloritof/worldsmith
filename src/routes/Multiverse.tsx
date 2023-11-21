import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Multiverse({ data }: RouteProps) {
  return <div>well</div>;
}
