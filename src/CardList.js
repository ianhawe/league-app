import React from "react";

const CardList = (props) => {

  let champions = props.champions ? Object.entries(props.champions.data) : [];
  console.log(champions);

  return (
    <div>
      {champions.length > 0 &&
        champions.map((champion) => (
          <div>
            <p> {champion[0]}</p>
   
            
          </div>
        ))}
    </div>
  );
};
export default CardList;
