import './Team.css';
import Member from '../Member';

const Team = (props) => {
    return (
        <section className='team'
            style={{backgroundColor: props.secondaryColor}}> 
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
           <div className='members'>
             {props.members.map(member => 
                <Member 
                    name={member.name} jobPosition={member.jobPosition} 
                    imageUrl={member.imageUrl} 
                />)}
           </div>
        </section>
    );
};

export default Team;