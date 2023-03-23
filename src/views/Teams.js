
import { useLocation } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa"
import { useState, useMemo } from "react";
import teams from "../data/teams"

const TeamsView = () => {
  const [currentGame, setCurrentGame] = useState(teams[0])
  const [currentTeam, setCurrentTeam] = useState(teams[0].teams[0])
  const { pathname } = useLocation();
  console.log(pathname)

  const selectGame = (game) => {
    setCurrentGame(game)
    setCurrentTeam(game.teams[0])
  }

  const gameItems = useMemo(() => {
    return teams.map((item, i) => {
      const className = item.game === currentGame.game ? "game-item current" : "game-item";
      return (
        <div key={i} className={className} onClick={() => selectGame(item)}>
          <img src={item.src} alt="" />
        </div>
      )
    });
  }, [currentGame]);

  const teamItems = useMemo(() => {
    return currentGame.teams.map((item, i) => {
      const className = item.name === currentTeam.name ? "team-item current" : "team-item";
      return (
        <div key={i} className={className} onClick={() => setCurrentTeam(item)}>
          <p>{item.name}</p>
        </div>
      )
    })
  }, [currentTeam, currentGame])

  const playerItems = useMemo(() => {
    return currentTeam.players.map((item, i) => {
      return (
        <div key={i} className="player-item">
          <div className='profile-pic'><img src={item.profile_pic} alt="" /></div>
          <div className="player-info">
            <div className="player-header">
              <h2>{item.pseudo}</h2>
              <div>
                <a href={item.reseaux.twitch} target="_blank" rel="noreferrer"><FaTwitch /></a>
                <a href={item.reseaux.insta} target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href={item.reseaux.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
              </div>
            </div>

            <h3>{item.fullname}</h3>
            <p className="date">{item.birthdate + ` (${item.age})`}</p>
          </div>
        </div>
      )
    })
  }, [currentTeam])

  return (
    <div className="teams">
      <section className="games-nav">
        <div className="container">
          <div className='games'>
            {gameItems}
          </div>
        </div>
      </section>
      <section className="team-content">
        <div className="container">
          <div className="teams-nav">
            {teamItems}
          </div>
          <div className="players">
            {playerItems}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamsView;