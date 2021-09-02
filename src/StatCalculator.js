import React from "react";

const StatCalculator = ({
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
  a,
}) => {
  return (
    <ul className='stat-calculator'>
      
      <li>Stats at level: 
      <input
        type='level'
        placeholder='1'
      />
      </li>
    </ul>
  );
};
export default StatCalculator;
