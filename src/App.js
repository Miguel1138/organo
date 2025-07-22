import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
        id: uuidv4(),
        name: 'Front-End',
        color: '#82CFFA',
    },
    {
        id: uuidv4(),
        name: 'Back-End',
        color: '#A6D157',
    },
    {
        id: uuidv4(),
        name: 'Banco de Dados',
        color: '#E06B69',
    },
    {
        id: uuidv4(),
        name: 'Design',
        color: '#D86EBF',
    },
    {
        id: uuidv4(),
        name: 'Produto',
        color: '#FEBA05',
    },
  ]);

  function onChangeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {        
        team.color = color;
      } 
      return team;
    }))
  }

  const [members, setMembers] = useState([]);
  const addNewMember = (member) => setMembers([...members, member]);
  function deleteMember(id) {
     setMembers(members.filter(member => member.id !== id)); 
  }


  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map(team => team.name)} onMemberRegister={member => addNewMember(member)}/>
      {teams.map(team => <Team 
        key={team.id} team={team} 
        members={members.filter(member => member.team === team.name)} 
        onDelete={deleteMember} onChangeColor={onChangeTeamColor}
      />)}
      <Footer />
    </div>
  );
}

export default App;