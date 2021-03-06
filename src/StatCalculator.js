import React from "react";
import "./StatCalculator.css";

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
    <div className='stat-calculator'>
      
      Stats at level: <input
        type='level'
        placeholder='1'
        className="level-input"
        maxLength="2"
      />
    
    </div>
  );
};
export default StatCalculator;
