import React from "react";

const CardList = (props) => {
  let champions = props.champions ? Object.entries(props.champions.data) : [];

  let removeStat = (statType, stat) => {
    if (stat > 0) {
      return (
        <li>
          {" "}
          {statType} + {stat}{" "}
        </li>
      );
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

            <h2>Offensive Stats</h2>
            <ul>
              {/* Offensive Stats*/}
              {removeStat("Attack Range: ", champion[1].stats.attackrange)}
              {removeStat("Attack Damage: ", champion[1].stats.attackdamage)}
              {removeStat("Attack Speed: ", champion[1].stats.attackspeed)}
              {removeStat(
                "Attack Damage Scale: ",
                champion[1].stats.attackdamageperlevel
              )}
              {removeStat(
                "Attack Speed Scale: ",
                champion[1].stats.attackspeedperlevel
              )}
              {removeStat("Critical Chance: ", champion[1].stats.crit)}
              {removeStat(
                "Critical Chance per level: ",
                champion[1].stats.critperlevel
              )}
            </ul>

            {/* Defensive Stats*/}
            <h2>Defensive </h2>
            <ul>
              {removeStat("Hp Scale: ", champion[1].stats.hpperlevel)}
              {removeStat("Hp: ", champion[1].stats.hp)}
              {removeStat("HP Regen: ", champion[1].stats.hpregen)}
              {removeStat(
                "HP Regen Scale: ",
                champion[1].stats.hpregenperlevel
              )}
              {removeStat("Armour: ", champion[1].stats.movespeed)}
              {removeStat("Armour Scale: ", champion[1].stats.armor)}
              {removeStat("Spell Block: ", champion[1].stats.spellblock)}
              {removeStat(
                "Spell Block Scale: ",
                champion[1].stats.spellblockperlevel
              )}
            </ul>
            {/* Other Stats*/}
            <ul>
             { removeStat( "Resource: ", champion[1].stats.mp  )}
             { removeStat( "Resource Regen: ", champion[1].stats.mpregen )}
             { removeStat( "Resource Scale: ", champion[1].stats.mpperlevel )}
             { removeStat( "Resource Regen Scale: ", champion[1].stats.mpregenperlevel )}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default CardList;
