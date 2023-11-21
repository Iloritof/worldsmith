import { useState, useEffect } from 'react';
import initial from '../utils/data.json';

const UseFetch = () => {
  const fetch = localStorage.getItem('world')
    ? localStorage.getItem('world')
    : 'not found';

  const [data, setData] = useState(() => {
    if (fetch == 'not found') return initial;
    return JSON.parse(fetch);
  });

  let count = 0;

  useEffect(() => {
    if (count < 5) {
      localStorage.setItem('world', JSON.stringify(data));
    }

    return () => {
      count++;
    };
  });

  return [data, setData];
};

export default UseFetch;
