import React from "react";
import Card from "./Card";

const CardList = (props) => {
  let champions = props.champions ? Object.entries(props.champions.data) : [];

  let removeStat = (statType, stat) => {
    if (stat > 0) {
      return (
        <li>
          {statType} + {stat}{" "}
        </li>
      );
    }
  };

  return (
    <div>
      {champions.length > 0 &&
        champions.map((champion) => (
          <Card
            name={champion[0]}
            pic={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion[1].image.full}`}
            /* Offensive Stats*/
            atkrng={removeStat("Attack Range: ", champion[1].stats.attackrange)}
            atkdmg={removeStat(
              "Attack Damage: ",
              champion[1].stats.attackdamage
            )}
            atkspd={removeStat(
              "Attack Speed: ",
              champion[1].stats.attackspeed
            )}
            atkdmgscl={removeStat(
              "Attack Damage Scale: ",
              champion[1].stats.attackdamageperlevel
            )}
            atkspdscl={removeStat(
              "Attack Speed Scale: ",
              champion[1].stats.attackspeedperlevel
            )}
            cricha={removeStat("Critical Chance: ", champion[1].stats.crit)}
            crichascl={removeStat(
              "Critical Chance per level: ",
              champion[1].stats.critperlevel
            )}
            /*  Defensive Stats*/

            hp={removeStat("Hp: ", champion[1].stats.hp)}
            hpscl={removeStat("Hp Scale: ", champion[1].stats.hpperlevel)}
            hprgn={removeStat("HP Regen: ", champion[1].stats.hpregen)}
            hprgnscl={removeStat(
              "HP Regen Scale: ",
              champion[1].stats.hpregenperlevel
            )}
            arm={removeStat("Armour: ", champion[1].stats.movespeed)}
            armscl={removeStat("Armour Scale: ", champion[1].stats.armor)}
            splblk={removeStat("Spell Block: ", champion[1].stats.spellblock)}
            splblkscl={removeStat(
              "Spell Block Scale: ",
              champion[1].stats.spellblockperlevel
            )}
            /* Other Stats*/

            rsc={removeStat("Resource: ", champion[1].stats.mp)}
            rscrgn={removeStat("Resource Regen: ", champion[1].stats.mpregen)}
            rscscl={removeStat(
              "Resource Scale: ",
              champion[1].stats.mpperlevel
            )}
            rscrgnscl={removeStat(
              "Resource Regen Scale: ",
              champion[1].stats.mpregenperlevel
            )}
          />
          
        ))}
    </div>
  );
};
export default CardList;
