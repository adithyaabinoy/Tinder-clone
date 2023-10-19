import React, { useState } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Ethan dolan",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_R9ifNgxEs6IZFAeW85MDPpjZwSbDQv9FDi1NASflHsTv_Ri",
    },
    {
      name: "Grayson Dolan",
      url: "https://img.wattpad.com/cover/135681082-256-k364639.jpg",
    },
  ]);

  return (
    <div>
      <h1>tinder</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
