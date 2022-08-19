import '../Feed.css'

import PlayerCard from '../components/PlayerCard'

const CoachFeed = ({ coach, choosePlayer, allPlayers }) => {
  return (
    <div>
      <h3 className="title team-name">{coach.teamName}</h3>
      <div className="player-cards">
        {allPlayers.map((player) => (
          <div onClick={() => choosePlayer(player)}>
            <PlayerCard
              key={player.id}
              name={player.name}
              email={player.email}
              height={player.height}
              weight={player.weight}
              age={player.age}
              primaryPos={player.primaryPosition}
              secondaryPos={player.secondaryPosition}
              id={player.id}
              isActive={player.isActive}
              proPic={player.proPic}
              player={player}
            ></PlayerCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoachFeed
