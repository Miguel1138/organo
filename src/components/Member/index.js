import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Member.css';

const Member = ({ member, bgColor, onDelete, onFavoriteMember}) =>  {
    return (
        <div className='member'> 
            <AiFillCloseCircle className='delete' size={25} onClick={() => onDelete(member.id)}/> 
            <div className='header' style={{backgroundColor: bgColor}}> 
                <img src={member.imageUrl} alt={member.name} />
            </div>
            <div className='footer'>
                <h4>{member.name}</h4>
                <h5>{member.jobPosition}</h5>
                <div className='favorite'>
                    {member.favorite ? 
                        <AiFillHeart onClick={() => onFavoriteMember(member.id)} size={25} /> 
                        : <AiOutlineHeart  onClick={() => onFavoriteMember(member.id)} size={25} /> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Member;  