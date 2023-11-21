import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Constellation({ data }: RouteProps) {
  return <div>Constellation</div>;
}
