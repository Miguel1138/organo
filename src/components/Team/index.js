import './Team.css';
import Member from '../Member';
import hexToRgba from 'hex-to-rgba';

const Team = ({ 
    team, members,
    onDelete, onChangeColor
}) => {
    return ( 
        members.length > 0 && (
                <section className='team'
                    style={{backgroundColor: hexToRgba(team.color, '0.6')}}> 
                    <input type='color' className='team-color' 
                        value={team.color} onChange={event => onChangeColor(event.target.value, team.name)} 
                        />
                    <h3 style={{borderColor: team.color}}>{team.name}</h3>
                    <div className='members'>
                    {members.map((member, key) => 
                        <Member 
                            key={key} 
                            member={member} bgColor={team.color}
                            onDelete={onDelete}
                        />)}
                    </div>
               </section>
            )
    );
};

export default Team;