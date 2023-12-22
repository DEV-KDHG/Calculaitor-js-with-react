// En el archivo Buttones.js
import React from 'react';

const Buttones = ({ onClick, name }) => (
  <button onClick={onClick}>{name}</button>
);

export default Buttones;
