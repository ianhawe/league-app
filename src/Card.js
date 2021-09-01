import { render } from "@testing-library/react";
import React from "react";
import "./Card.css";

const Card = ({
  name,
  pic,
  /* Offensive Stats*/
  atkrng,
  atkdmg,
  atkspd,
  atkdmgscl,
  atkspdscl,
  cricha,
  crichascl,

  /*  Defensive Stats*/
  hp,
  hpscl,
  hprgn,
  hprgnscl,
  arm,
  armscl,
  splblk,
  splblkscl,

  /* Other Stats*/
  rsc,
  rscrgn,
  rscscl,
  rscrgnscl,

  /* Calculators */
  atkdmgCalc
}) => {
  return (
    <div className="card">
      <h2>{name}</h2>

      <img src={pic} alt="{name}" />
      <div className="stat-container">
        <ul>
          {atkrng}
          {atkdmg}
          {atkspd}
          <p> </p>
          {atkdmgscl}
          {atkspdscl}
          {cricha}
          {crichascl}
        </ul>

        <ul>
          {hp}
          {hprgn}
          {arm}
          {splblk}
          <p> </p>
          {hpscl}
          {hprgnscl}
          {armscl}
          {splblkscl}
        </ul>

        <ul>
        {atkdmgCalc}
        </ul>
      </div>
      <ul className="group-3">
        {rsc}
        {rscrgn}
        {rscscl}
        {rscrgnscl}
      </ul>
    </div>
  );
};
export default Card;
