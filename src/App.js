import { useEffect, useState } from 'react';
import playersData from './Data/playersData.json'
import Profile from './Components/Players-profile/Profile';
import TeamMembers from './Components/TeamMembers/TeamMembers';

function App() {

  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    setPlayers(playersData)
  }, [])

  const playerSelected = (newPlayer) => {
    const newTeam = [...team, newPlayer]
    setTeam(newTeam)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* TeamMebers tag shows the selected players info */}
      <TeamMembers team={team}></TeamMembers>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2%', flexWrap: 'wrap' }}>
        {
          players.map(element => <Profile playersDetails={element} key={element._id} playerSelected={playerSelected}></Profile>)
        }
      </div>

    </div>
  );
}

export default App;
