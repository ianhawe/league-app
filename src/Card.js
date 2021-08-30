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
    <div className='card'>
    
        <h2>{name}</h2>
  
        <img src={pic} alt="{name}" /> 
        <div className='container'>
        <ul className='container-child-2'>
            {hp}
            {hpscl}
            {hprgn}
            {hprgnscl}
            {arm}
            {armscl}
            {splblk}
            {splblkscl}
          </ul>
        <ul className='container-child-1'>
          {atkrng}
          {atkdmg}
          {atkspd}
          {atkdmgscl}
          {atkspdscl}
          {cricha}
          {crichascl}
        </ul>
     </div>
          <ul className='container-child-3'>
            {rsc}
            {rscrgn}
            {rscscl}
            {rscrgnscl}
          </ul>  
  
    </div>
  );
};
export default Card;
