import './Form.css';
import Field from '../Field';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TeamForm from '../TeamForm';


const Form = ({ teamsName, onMemberRegister, onTeamRegister, onFavoriteMember }) => {
    const [name, setName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [team, setTeam] = useState(teamsName[0]);

    const onSave = (event) => {
        event.preventDefault();
        onMemberRegister({
            id: uuidv4(), name, jobPosition, imageUrl, team
        })        

        setName('');
        setJobPosition('');
        setImageUrl('');
        setTeam('');
    }    

    return (
        <section className='form'> 
            <form onSubmit={onSave}>
                <h2> Preencha os dados para inserir novo colaborador</h2>
                <Field 
                    value={name} onChange={(value) => setName(value)} 
                    isRequired={true} label="Nome" placeholder="Digite seu nome"
                />
                <Field 
                    value={jobPosition} onChange={value => setJobPosition(value)}
                    isRequired={true} label="Cargo" placeholder="Digite seu cargo"
                />
                <Field 
                    value={imageUrl} onChange={value => setImageUrl(value)}
                    label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown 
                    value={team} onChange={value => setTeam(value)}
                    isRequired={true} label="Cor" items={teamsName} />
                <Button> Criar Card </Button>
            </form>
           <TeamForm onTeamRegister={onTeamRegister} />
        </section>

        
    );
};

export default Form;