import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { VscDebugPause } from 'react-icons/vsc';

function deleteMember() {
  console.log("banana"); 
}

function App() {
  const [teams, setTeams] = useState([
    {
        name: 'Front-End',
        color: '#82CFFA',
    },
    {
        name: 'Back-End',
        color: '#A6D157',
    },
    {
        name: 'Banco de Dados',
        color: '#E06B69',
    },
    {
        name: 'Design',
        color: '#D86EBF',
    },
    {
        name: 'Produto',
        color: '#FEBA05',
    },
  ]);

  function onChangeTeamColor(color, name) {
    setTeams(teams.map(team => {
      if(team.name === name) {
        debugger
        team.color = color;
      } 
      return team;
    }))
  }

  const [members, setMembers] = useState([]);
  const addNewMember = (member) => setMembers([...members, member]);
  
  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map(team => team.name)} onMemberRegister={member => addNewMember(member)}/>
      {teams.map(team => <Team 
        key={team.name} team={team} 
        members={members.filter(member => member.team === team.name)} 
        onDelete={deleteMember} onChangeColor={onChangeTeamColor}
      />)}
      <Footer />
    </div>
  );
}

export default App;