import './TextField.css';

const TextField = (props) => {
    const typing = (event) => props.onChange(event.target.value);
    const defaultPlaceholder = `${props.placeholder}...`
    return (
        <div className='text-field'>
            <label> {props.label} </label>
            <input 
                value={props.value} onChange={typing}
                required={props.isRequired} placeholder={defaultPlaceholder} />
        </div>
    );
};

export default TextField;