import './TextField.css';

const TextField = (props) => {
    return (
        <div>
            <label> {props.label} </label>
            <input placeholder={props.placeholder}/>
        </div>
    );
};

export default TextField;