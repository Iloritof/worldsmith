import Layout from '../components/Layout';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import planet from '../assets/img/planet.jpg';
import { useState } from 'react';
import Input from '../components/Input';
import { World } from '../utils/type';

interface RouteProps {
  data: World;
  setData: React.Dispatch<React.SetStateAction<World>>;
}

export default function Universe({ data, setData }: RouteProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const overview = (
    <div>
      <div className='attribute-group'>
        <h1 className='h2 ta-c'>{data.universes[0].name}</h1>
      </div>
      {data.universes[0].desc.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );

  const characteristics = (
    <div>
      <div className='attribute-group'>
        <Input intialValue={555} label='Well' />
        <Input intialValue={555} label='Well' />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        nisi nam deleniti, excepturi minus ut quasi earum, illo rerum error
        sequi, libero magni tempora numquam voluptatum ad modi reprehenderit!
        Praesentium.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        suscipit, commodi architecto aut dolorum unde sint dolore cum corporis
        ratione non quae reiciendis. Ducimus veritatis voluptate omnis, tempore
        quisquam dicta!
      </p>
    </div>
  );

  const content = (
    <div>
      <div className='attribute-group'>
        {data.galaxies.map((galaxy) => {
          if (galaxy.universeId === 1) {
            return <p key={galaxy.id}>{galaxy.name}</p>;
          }
        })}
      </div>
    </div>
  );

  return (
    <Main>
      <Navbar navText='Universe' />
      <h1 className='h5 section__title'>
        <span className='tc-t'>01 </span>
        Universe
      </h1>
      <Layout
        columns={[
          ['fixed', 44.5],
          ['auto', 0],
        ]}
        gap={12}
        sideGap={10.4}
      >
        <div>
          <img src={planet} alt='' />
        </div>
        <section className='section section--universe'>
          <nav className='section__nav'>
            <ul role='nav'>
              <li>
                <button
                  aria-expanded={activeSection == 'overview' ? true : false}
                  onClick={() => setActiveSection('overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  aria-expanded={
                    activeSection == 'characteristics' ? true : false
                  }
                  onClick={() => setActiveSection('characteristics')}
                >
                  Characteristics
                </button>
              </li>
              <li>
                <button
                  aria-expanded={activeSection == 'content' ? true : false}
                  onClick={() => setActiveSection('content')}
                >
                  Galaxies
                </button>
              </li>
            </ul>
          </nav>

          {activeSection == 'overview' ? overview : ''}
          {activeSection == 'characteristics' ? characteristics : ''}
          {activeSection == 'content' ? content : ''}
        </section>
      </Layout>
    </Main>
  );
}
