import "../Details.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlayerDetails = ({ player }) => {
  let { playerId } = useParams();

  let feetMath = (player.height / 12).toFixed(0);
  let inchMath = player.height % 12;

  let secondaryPosAbr;
  switch (player.secondaryPosition) {
    case "Pitcher":
      secondaryPosAbr = "Pitcher";
      break;
    case "Catcher":
      secondaryPosAbr = "Catcher";
      break;
    case "First Baseman":
      secondaryPosAbr = "1B";
      break;
    case "Second Baseman":
      secondaryPosAbr = "2B";
      break;
    case "Third Baseman":
      secondaryPosAbr = "3B";
      break;
    case "Short Stop":
      secondaryPosAbr = "SS";
      break;
    case "Center Fielder":
      secondaryPosAbr = "CF";
      break;
    case "Right Fielder":
      secondaryPosAbr = "RF";
  }

  return (
    <div className="player-page">
      <h1 className="player-name">{player.name}</h1>
      <h6 className="player-email">{player.email}</h6>
      <div className="player-info">
        <div className="player-grid">
          <div className="grid-top">
            <h4>Height</h4>
            <h2>
              {feetMath}'{inchMath}"
            </h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Age</h4>
            <h2>{player.age}</h2>
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Weight</h4>
            <h2>{player.weight} lbs</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Active</h4>
            {player.isActive != true ? <h2>No</h2> : <h2>Yes</h2>}
          </div>
        </div>
        <div className="player-grid">
          <div className="grid-top">
            <h4>Primary Position</h4>
            <h2>{player.primaryPosition}</h2>
          </div>
          <div className="empty"></div>
          <div className="grid-bottom">
            <h4>Secondary Position</h4>
            <h2>{secondaryPosAbr}</h2>
          </div>
        </div>
      </div>
      <div className="player-stats-and-pic">
        <div className="stat-graph">
          <h1 className="skills">Skills</h1>
          <div className="skills-graph"></div>
        </div>
        <div className="pic-container">
          <img className="pic" src={player.proPic}></img>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
