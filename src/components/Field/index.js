import './Field.css';

const Field = ({
    placeholder, label, type='text',
    value, isRequired, onChange
}) => {
    const typing = (event) => onChange(event.target.value);
    const defaultPlaceholder = `${placeholder}...`;
    return (
        <div className={`field field-${type}`}>
            <label> {label} </label>
            <input 
                value={value} onChange={typing} type={type}
                required={isRequired} placeholder={defaultPlaceholder} />
        </div>
    );
};

export default Field;