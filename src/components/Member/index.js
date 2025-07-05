import './Member.css';

const Member = ({name, jobPosition, imageUrl}) =>  {
    return (
        <div className='member'> 
            <div className='header'> 
                <img src={imageUrl} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{jobPosition}</h5>
            </div>
        </div>
    );
}

export default Member;