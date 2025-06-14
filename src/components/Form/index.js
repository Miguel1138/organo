import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown';
import Button from '../Button';

const onSave = (event) => {
    event.preventDefault();
    console.log("teste");
}

const Form = () => {
    const teams = [
        'Front-end',
        'Back-end',
        'Design',
        'Produto',
        'Banco'
    ]

    return (
        <section className='form'> 
            <form onSubmit={onSave}>
                <h2> Preencha os dados para inserir novo colaborador</h2>
                <TextField isRequired={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField isRequired={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Times" items={teams} />
                <Button> Criar Card </Button>
            </form>
        </section>
    );
};

export default Form;