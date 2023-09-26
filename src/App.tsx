import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import World from './routes/World';
import Universe from './routes/Universe';
import Constellation from './routes/Constellation';
import Galaxy from './routes/Galaxy';
import Star from './routes/Star';
import Planet from './routes/Planet';
import Satellite from './routes/Satellite';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'world',
    element: <World />
  },
  {
    path: 'universe',
    element: <Universe />
  },
  {
    path: 'constellations/:constallationId',
    element: <Constellation />
  },
  {
    path: 'galaxys/:galaxyId',
    element: <Galaxy />
  },
  {
    path: 'stars/:starId',
    element: <Star />
  },
  {
    path: 'planets/:planetId',
    element: <Planet />
  },
  {
    path: 'satellite/:satelliteId',
    element: <Satellite />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
