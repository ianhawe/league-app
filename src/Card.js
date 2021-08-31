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
}) => {
  return (
    <div className="card">
      <h2>{name}</h2>

      <img src={pic} alt="{name}" />
      <div className="flex-container">
        <ul>
          {hp}
          {hpscl}
          {hprgn}
          {hprgnscl}
          {arm}
          {armscl}
          {splblk}
          {splblkscl}
        </ul>
        <ul>
          {atkrng}
          {atkdmg}
          {atkspd}
          {atkdmgscl}
          {atkspdscl}
          {cricha}
          {crichascl}
        </ul>

        <ul>
          {rsc}
          {rscrgn}
          {rscscl}
          {rscrgnscl}
        </ul>
      </div>
    </div>
  );
};
export default Card;
