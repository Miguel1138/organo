import './Member.css';

const Member = ({name, jobPosition, imageUrl, bgColor}) =>  {
    return (
        <div className='member'> 
            <div className='header' style={{backgroundColor: bgColor}}> 
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