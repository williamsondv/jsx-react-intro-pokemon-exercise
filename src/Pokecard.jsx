import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, id, type, base_experience }) => {
  return (
    <div className="card">
      <p className="pokeName">{name}</p>
      <img
        className="pokeImage"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
