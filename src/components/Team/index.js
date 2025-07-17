import './Team.css';
import Member from '../Member';

const Team = ({ 
    team, members,
    onDelete
}) => {
    return ( 
        members.length > 0 && (
            <section className='team'
                style={{backgroundColor: team.secondaryColor}}> 
                <h3 style={{borderColor: team.primaryColor}}>{team.name}</h3>
                <div className='members'>
                {members.map(member => 
                    <Member 
                        key={member.name} 
                        member={member} bgColor={team.primaryColor}
                        onDelete={onDelete}
                    />)}
                </div>
            </section>
        )
    );
};

export default Team;