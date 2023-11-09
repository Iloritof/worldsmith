import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import World from './routes/World';
import Universe from './routes/Universe';
import Constellation from './routes/Constellation';
import Galaxy from './routes/Galaxy';
import Star from './routes/Star';
import Planet from './routes/Planet';
import Satellite from './routes/Satellite';

import { data } from './utils/data.ts';
import { useState, useEffect } from 'react';

function App() {
  const [world, setWorld] = useState(data);
  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, []);

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
          element: <World />,
        },
        {
          path: 'universe',
          element: <Universe setData={setWorld} data={world} />,
        },
        {
          path: 'constellations/:constallationId',
          element: <Constellation />,
        },
        {
          path: 'galaxys/:galaxyId',
          element: <Galaxy />,
        },
        {
          path: 'stars/:starId',
          element: <Star />,
        },
        {
          path: 'planets/:planetId',
          element: <Planet />,
        },
        {
          path: 'satellite/:satelliteId',
          element: <Satellite />,
        },
      ])}
    />
  );
}

export default App;
