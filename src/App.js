import { useEffect, useState } from 'react';
import playersData from './Data/playersData.json'
import Profile from './Components/Players-profile/Profile';
import Summry from './Components/Players-profile/Summury/Summry';

function App() {

  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() => {
    setPlayers(playersData)
    // fetch('http://www.json-generator.com/api/json/get/cliizjvyJK?indent=2')
    //   .then(res => res.json())
    //   .then(data => setPlayers(data))
    //   .catch(error => console.log(error))
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
      <h1>total players are here: {players.length}</h1>

      <div style={{display: 'flex'}}>
        <div style={{width: '80%'}}>
          {
            players.map(element => <Profile playersDetails={element} key={element._id} playerSelected={playerSelected}></Profile>)
          }
        </div>
        <Summry team ={team}></Summry>
      </div>

    </div>
  );
}

export default App;
