export const data = {
  id: 1,
  universes: [
    {
      id: 1,
      name: 'Universe',
      desc: ['Well'],
    },
  ],
  galaxies: [
    {
      id: 1,
      name: 'Milky Way',
      desc: [''],
      universeId: 1,
      radius: 50000,
      stellarLocation: 25800,
      stellarRadius: 10,
      stellarDensity: 0.003,
    },
  ],
  constellations: [
    {
      id: 1,
      name: '',
      desc: [''],
    },
  ],
  systems: [
    {
      id: 1,
      name: 'Sol',
      desc: [''],
      galaxyId: 1,
      spacingFactor: 0.3,
      firstOrbit: 0.4,
    },
  ],
  stars: [
    {
      id: 1,
      name: 'Sun',
      desc: [
        'Sun, star around which Earth and the other components of the solar system revolve',
      ],
      systemId: 1,
      mass: 1,
      currentAge: 4.5,
    },
  ],
  planets: [
    {
      id: 1,
      name: 'Earth',
      desc: [''],
      systemId: 1,
      mass: 1,
      cmf: 35,
      axialTilt: 23.5,
      rotationPeriod: 24,
      albedo: 0.29,
      greenhouseEffect: 1,
      semiMajorAxis: 1,
      eccentricity: 0.167,
      inclination: 0,
    },
  ],
  satellite: [
    {
      id: 1,
      name: 'Moon',
      desc: ["The Moon is Earth's only natural satellite"],
      planetId: 1,
    },
  ],
};

export default data;
