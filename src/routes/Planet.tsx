import planet from '../assets/img/planet.jpg';
import { useState } from 'react';
import Input from '../components/Input';
import { World } from '../utils/type';
import Section from '../components/Section';
import { useParams } from 'react-router-dom';
import hints from '../utils/hints.json';

interface RouteProps {
  data: World;
  setData?: React.Dispatch<React.SetStateAction<World>>;
}

export default function Planet({ data }: RouteProps) {
  const { planetId }: { planetId: string } = useParams();
  const [activeSection, setActiveSection] = useState('overview');

  const overview = (
    <div>
      <div className='attribute-group'>
        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <h1 key={i} className='h2 ta-c'>
                {planet.name}
              </h1>
            );
        })}
      </div>
      {data.planets.map((planet) => {
        if (planet.id == parseInt(planetId))
          return planet.desc.map((txt, i) => <p key={i}>{txt}</p>);
      })}
    </div>
  );

  const characteristics = (
    <div>
      <div className='attribute-group'>
        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={data.stars.map((star) => {
                  if (star.systemId == planet.systemId) return star.mass;
                  return 0;
                })}
                label='Main Star Mass'
                unit='msol'
              >
                {hints.starMass.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.heightOfObserver}
                label='Main Star Luminosity'
                unit='lsol'
              >
                {hints.starLuminosity.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.heightOfObserver}
                label='Main Star Habitable Zone (Inner)'
                unit='AU'
              >
                {hints.starHabitableZoneInner.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.heightOfObserver}
                label='Main Star Habitable Zone (Outer)'
                unit='AU'
              >
                {hints.starHabitableZoneOuter.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}
      </div>

      <div className='attribute-group'>
        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.mass}
                label='Mass'
                unit='MEarth'
              >
                {hints.planetMass.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input key={i} intialValue={planet.cmf} label='CMF' unit='%'>
                {hints.planetCMF.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Ave. Density'
                unit='g/cm³'
              >
                {hints.planetDensity.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Ave. Radius'
                unit='REarth'
              >
                {hints.planetRadius.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Ave. Gravity'
                unit='g'
              >
                {hints.planetGravity.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Escape Velocity'
                unit='VEarth'
              >
                {hints.planetEscapeVelocity.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Axial Tilt'
                unit='º'
              >
                {hints.planetAxialTilt.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Rotation Direction'
                unit=''
              >
                {hints.planetRotationDirection.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Tropics'
                unit='º N/S'
              >
                {hints.planetTropics.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Polar Circles'
                unit='º N/S'
              >
                {hints.planetPolarCircles.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Rotation Period'
                unit='Earth hrs'
              >
                {hints.planetRotationPeriod.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.cmf}
                label='Albedo (Bond)'
                unit=''
              >
                {hints.planetAlbedoBond.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Greenhouse Effect'
                unit=''
              >
                {hints.planetGreenhouseEffect.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.axialTilt}
                label='Surface Temperature'
                unit='K'
              >
                {hints.planetSurfaceTemperature.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}
      </div>

      <div className='attribute-group'>
        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.heightOfObserver}
                label='Height of Observer'
                unit='m'
              >
                {hints.planetHeightOfObserver.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.heightOfObserver}
                label='Horizon Distance'
                unit='km'
              >
                {hints.planetHorizonDistance.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}
      </div>

      <div className='attribute-group'>
        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.semiMajorAxis}
                label='Semi-Major axis'
                unit='AU'
              >
                {hints.planetSemiMajorAxis.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.eccentricity}
                label='Eccentricity'
                unit=''
              >
                {hints.planetEccentricity.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.semiMajorAxis}
                label='Perihelion'
                unit='AU'
              >
                {hints.planetPerihelion.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.eccentricity}
                label='Aphelion'
                unit='AU'
              >
                {hints.planetAphelion.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.semiMajorAxis}
                label='Orbital Period'
                unit='Earth Yrs'
              >
                {hints.planetOrbitalPeriod.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.eccentricity}
                label='Inclination'
                unit='º'
              >
                {hints.planetInclination.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}

        {data.planets.map((planet, i) => {
          if (planet.id == parseInt(planetId))
            return (
              <Input
                key={i}
                intialValue={planet.eccentricity}
                label='Orbital direction'
                unit=''
              >
                {hints.planetOrbitalDirection.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </Input>
            );
        })}
      </div>
    </div>
  );

  const content = (
    <div>
      <div className='attribute-group'>
        {data.satellites.map((satellite) => {
          if (satellite.planetId === parseInt(planetId)) {
            return <p key={satellite.id}>{satellite.name}</p>;
          }
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
