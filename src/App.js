import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';



function App() {
  
  const [members, setMembers] = useState([]);
  const addNewMember = (member) => setMembers([...members, member]);

  return (
    <div className="App">
      <Banner />
      <Form onMemberRegister={member => addNewMember(member)}/>
    </div>
  );
}

export default App;
