export interface World {
  id: number;
  universes: Universe[];
  galaxies: Galaxy[];
  constellations: Constellation[];
  systems: System[];
  stars: Star[];
  planets: Planet[];
  satellites: Satellite[];
}

export interface Universe {
  id: number;
  name: string;
  desc: string[];
}

export interface Galaxy {
  id: number;
  name: string;
  desc: string[];
  universeId: number;
  radius: number;
  stellarLocation: number;
  stellarRadius: number;
  stellarDensity: number;
}

export interface Constellation {
  id: number;
  name: string;
  desc: string[];
}

export interface System {
  id: number;
  name: string;
  desc: string[];
  galaxyId: number;
  spacingFactor: number;
  firstOrbit: number;
}

export interface Planet {
  id: number;
  name: string;
  desc: string[];
  systemId: number;
  mass: number;
  cmf: number;
  axialTilt: number;
  rotationPeriod: number;
  albedo: number;
  greenhouseEffect: number;
  heightOfObserver: number;
  semiMajorAxis: number;
  eccentricity: number;
  inclination: number;
}

export interface Star {
  id: number;
  name: string;
  desc: string[];
  systemId: number;
  mass: number;
  currentAge: number;
}

export interface Satellite {
  id: number;
  name: string;
  desc: string[];
  planetId: number;
}
