import planet from '../assets/img/planet.jpg';
import { useState } from 'react';
import Input from '../components/Input';
import { World } from '../utils/type';
import Section from '../components/Section';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Universe({ data }: RouteProps) {
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
          if (galaxy.universeId === 0) {
            return <p key={galaxy.id}>{galaxy.name}</p>;
          }
          return;
        })}
      </div>
    </div>
  );

  return (
    <Section
      image={planet}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      childrenName='Satellites'
    >
      {activeSection == 'overview' ? overview : ''}
      {activeSection == 'characteristics' ? characteristics : ''}
      {activeSection == 'content' ? content : ''}
    </Section>
  );
}
