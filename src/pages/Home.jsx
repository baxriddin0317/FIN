import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navifate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navifate("/plan1");
    }, [2000]);
  }, []);

  return (
    <div>Loading...</div>
  )
}

export default Home