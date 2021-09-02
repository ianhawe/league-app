import { render } from "@testing-library/react";
import React from "react";
import "./Card.css";
import StatCalculator from "./StatCalculator";

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
      {console.log({ name })}
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
      </div>
      <ul className="group-3">
        {rsc}
        {rscrgn}
        {rscscl}
        {rscrgnscl}
      </ul>
      <ul>
        <StatCalculator
          name={name}
          pic={pic}
          /* Offensive Stats*/
          atkrng={atkrng}
          atkdmg={atkdmg}
          atkspd={atkspd}
          atkdmgscl={atkdmgscl}
          atkspdscl={atkspdscl}
          cricha={cricha}
          crichascl={crichascl}
          /*  Defensive Stats*/
          hp={hp}
          hpscl={hpscl}
          hprgn={hprgn}
          hprgnscl={hprgnscl}
          arm={arm}
          armscl={armscl}
          splblk={splblk}
          splblkscl={splblkscl}
          /* Other Stats*/
          rsc={rsc}
          rscrgn={rscrgn}
          rscscl={rscscl}
          rscrgnscl={rscrgnscl}
        />
      </ul>
    </div>
  );
};
export default Card;
