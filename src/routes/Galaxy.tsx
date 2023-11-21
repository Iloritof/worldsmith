import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Galaxy({ data }: RouteProps) {
  return <div>Galaxy</div>;
}
