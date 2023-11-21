import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Multiverse from './routes/Multiverse';
import Universe from './routes/Universe';
import Constellation from './routes/Constellation';
import Galaxy from './routes/Galaxy';
import Star from './routes/Star';
import Planet from './routes/Planet';
import Satellite from './routes/Satellite';

import UseFetch from './hooks/UseFetch';

function App() {
  const [world, setWorld] = UseFetch();

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          errorElement: <ErrorPage />,
        },
        {
          path: 'world',
          element: <Multiverse setData={setWorld} data={world} />,
        },
        {
          path: 'universe',
          element: <Universe setData={setWorld} data={world} />,
        },
        {
          path: 'constellations/:constallationId',
          element: <Constellation setData={setWorld} data={world} />,
        },
        {
          path: 'galaxys/:galaxyId',
          element: <Galaxy setData={setWorld} data={world} />,
        },
        {
          path: 'stars/:starId',
          element: <Star setData={setWorld} data={world} />,
        },
        {
          path: 'planets/:planetId',
          element: <Planet setData={setWorld} data={world} />,
        },
        {
          path: 'satellite/:satelliteId',
          element: <Satellite setData={setWorld} data={world} />,
        },
      ])}
    />
  );
}

export default App;
