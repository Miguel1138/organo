import './TeamForm.css'
import { useState } from "react";
import Button from "../Button"
import TextField from "../TextField"

const TeamForm = ({onTeamRegister}) => {
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (event) => {
         event.preventDefault();
         onTeamRegister({name: teamName, color: teamColor})

         setTeamColor('');
         setTeamName('');
    }

    return (
        <form onSubmit={onSave}>
            <h2> Preencha os dados para inserir novo time</h2>
            <TextField 
                value={teamName} onChange={(value) => setTeamName(value)} 
                    isRequired label="Nome" placeholder="Digite o nome do time"
                />
                <TextField 
                    value={teamColor} onChange={value => setTeamColor(value)}
                    isRequired label="Cor" placeholder="Digite a cor do Time"
                />
                <Button> Criar Time </Button>
        </form>
    );
}

export default TeamForm;