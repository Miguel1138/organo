import './TextField.css';

const TextField = ({
    placeholder, label, 
    value, isRequired, onChange
}) => {
    const typing = (event) => onChange(event.target.value);
    const defaultPlaceholder = `${placeholder}...`;
    return (
        <div className='text-field'>
            <label> {label} </label>
            <input 
                value={value} onChange={typing}
                required={isRequired} placeholder={defaultPlaceholder} />
        </div>
    );
};

export default TextField;