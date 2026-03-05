import React from "react";

const Infolista = (props) => {
  return (
    <ul>
      {props.taulukko.map((item, index) => (
        <li key={index}>{item} </li>
      ))}
    </ul>
  );
};

export default Infolista;
