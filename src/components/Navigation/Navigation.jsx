import React from 'react';
import { Link } from 'gatsby';

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/O-Nas/">O nas</Link>
      <Link to="/Oferta/">Oferta</Link>
      <Link to="/Obszar-Dzialania">Obszar Działania</Link>
      <Link to="/Realizacje">Realizacje</Link>
      <Link to="/Kontakt">Kontakt</Link>
    </div>
  );
}

export default Navigation;
