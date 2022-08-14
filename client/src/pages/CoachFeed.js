import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CoachFeed = () => {
  let navigate = useNavigate();
  const [viewAllPlayers, setViewAllPlayers] = useState([]);

  useEffect(() => {
    const getPlayer = async () => {};
  });
  const showPlayer = (player) => {
    navigate(`${player.id}`);
  };

  return (
    <div className="player-grid">
      CoachFeed
      {props.players.map((player) => (
        <div
          className="player-card"
          onClick={() => showPlayer(player)}
          key={player.id}
        >
          <img
            style={{ display: "block" }}
            img
            src={player.proPic}
            alt={player.name}
          />
          <h3>{player.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CoachFeed;
