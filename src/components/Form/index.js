import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    const onSave = (event) => {
        event.preventDefault();
        props.onMemberRegister({
            name, jobPosition, imageUrl, team
        })
    }
       
    const [name, setName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [team, setTeam] = useState('');

    return (
        <section className='form'> 
            <form onSubmit={onSave}>
                <h2> Preencha os dados para inserir novo colaborador</h2>
                <TextField 
                    value={name} onChange={(value) => setName(value)} 
                    isRequired={true} label="Nome" placeholder="Digite seu nome"
                />
                <TextField 
                    value={jobPosition} onChange={value => setJobPosition(value)}
                    isRequired={true} label="Cargo" placeholder="Digite seu cargo"
                />
                <TextField 
                    value={imageUrl} onChange={value => setImageUrl(value)}
                    label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown 
                    value={team} onChange={value => setTeam(value)}
                    isRequired={true} label="Times" items={props.teamsName} />
                <Button> Criar Card </Button>
            </form>
        </section>
    );
};

export default Form;