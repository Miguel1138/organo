import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown';

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
            <form>
                <h2> Preencha os dados para colocar os dados </h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown label="Times" items={teams} />
            </form>
        </section>
    );
};

export default Form;