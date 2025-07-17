import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

const teams = [
  {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
  },
  {
      name: 'Back-End',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
  },
  {
      name: 'Banco de Dados',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
  },
  {
      name: 'Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
  },
  {
      name: 'Produto',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
  },
]

function deleteMember() {
  console.log("banana"); 
}

function App() {
  const [members, setMembers] = useState([]);
  const addNewMember = (member) => setMembers([...members, member]);
  
  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map(team => team.name)} onMemberRegister={member => addNewMember(member)}/>
      {teams.map(team => <Team 
        key={team.name} team={team} 
        members={members.filter(member => member.team === team.name)} 
        onDelete={deleteMember} 
      />)}
      <Footer />
    </div>
  );
}

export default App;