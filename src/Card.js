import { render } from "@testing-library/react";
import React from "react";

const Card = (
 { name,
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
  rscrgnscl}
) => {
  return(
  
  <div>
      <h2>{name}</h2>
    
  <img src= {pic} alt="{name}" />        
  <ul>
  {atkrng}
  {atkdmg}
  {atkspd}
  {atkdmgscl}
  {atkspdscl}
  {cricha}
  {crichascl}
  {hp}
  {hpscl}
  {hprgn}
  {hprgnscl}
  {arm}
  {armscl}
  {splblk}
  {splblkscl}
  {rsc}
  {rscrgn}
  {rscscl}
  {rscrgnscl}
              
          
      </ul>
  

  </div>);
};
export default Card;
