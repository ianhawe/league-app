import React from "react";

const CardList = (props) => {
  let champions = props.champions ? Object.entries(props.champions.data) : [];

  let removeStat = (stat) => {
    console.log(1, stat);
    if (stat === 0) {
      return 'N/A' ;
    }
  };

  return (
    <div>
      {champions.length > 0 &&
        champions.map((champion) => (
          <div>
            <h3> {champion[0]}</h3>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion[1].image.full}`}
              alt="bob"
            />
            <ul>
              {" "}
              Stats
              <li>Hp: {champion[1].stats.hp}</li>
              <li>Hp Scale: {champion[1].stats.hpperlevel}</li>
              <li>HP Regen: {champion[1].stats.hpregen}</li>
              <li>HP Regen Scale: {champion[1].stats.hpregenperlevel}</li>
              <li>Mana: {removeStat(champion[1].stats.mp)}</li>
              <li>MP Regen: {removeStat(champion[1].stats.mpregen)}</li>
              <li>MP Regen Scale: {removeStat(champion[1].stats.mpregenperlevel)}</li>
              <li>Mana Scale: {removeStat(champion[1].stats.mpperlevel)}</li>
              <li>Armour: {champion[1].stats.movespeed}</li>
              <li>Armour Scale: {champion[1].stats.armor}</li>
              <li>Spell Block: {champion[1].stats.spellblock}</li>
              <li>Spell Block Scale: {champion[1].stats.spellblockperlevel}</li>
              <li>Attack Range: {champion[1].stats.attackrange}</li>
              <li>Critical Chance: {removeStat(champion[1].stats.crit)}</li>
              <li>
                Critical Chance per level: {removeStat(champion[1].stats.critperlevel)}
              </li>
              <li>Attack Damage Scale: {champion[1].stats.attackdamageperlevel}</li>
              <li> Attack Speed Scale: {champion[1].stats.attackspeedperlevel}</li>
              <li>Attack Speed: {champion[1].stats.attackspeed}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};
export default CardList;
