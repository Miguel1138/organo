import './Team.css';
import Member from '../Member';

const Team = (props) => {
    return ( props.members.length > 0 && 
        <section className='team'
            style={{backgroundColor: props.secondaryColor}}> 
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='members'>
             {props.members.map(member => 
                <Member 
                    key={member.name}
                    name={member.name} jobPosition={member.jobPosition} 
                    imageUrl={member.imageUrl} bgColor={props.primaryColor}
                />)}
            </div>
        </section>
    );
};

export default Team;