import './Member.css';

const Member = ({ member, bgColor, onDelete }) =>  {
    return (
        <div className='member'> 
            <div className='delete' onClick={onDelete}> delete </div>
            <div className='header' style={{backgroundColor: bgColor}}> 
                <img src={member.imageUrl} alt={member.name} />
            </div>
            <div className='footer'>
                <h4>{member.name}</h4>
                <h5>{member.jobPosition}</h5>
            </div>
        </div>
    );
}

export default Member;