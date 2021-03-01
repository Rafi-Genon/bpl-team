import { useEffect, useState } from 'react';
import playersData from './Data/playersData.json'
import Profile from './Components/Players-profile/Profile';
import Summry from './Components/Players-profile/Summury/Summry';

function App() {

  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    setPlayers(playersData)
  }, [])
  console.log(players);

  const playerSelected = (newPlayer) => {
    console.log('you clis');
    const newTeam = [...team, newPlayer]
    setTeam(newTeam)
  }
  console.log(team);
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Summry team={team}></Summry>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2%', flexWrap: 'wrap' }}>
        {
          players.map(element => <Profile playersDetails={element} key={element._id} playerSelected={playerSelected}></Profile>)
        }
      </div>

    </div>
  );
}

export default App;
