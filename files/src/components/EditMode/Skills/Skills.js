import {BsTools} from 'react-icons/bs';

//ez a child componentbe megy
import {MdDelete} from 'react-icons/md';
//

export function Skills({skillsProps}) {

    const {skills, setSkills, addSkill, removeSkill, skillsArray, showSkillsEdit, setSkillsEdit} = skillsProps;

    return (
        <section className = "info-container skills-container">
            <h2>Skills</h2>
            <BsTools className = 'icon-logo' size = "20px"/>
            {
                showSkillsEdit ? <>
                <input type = 'text' value = {skills} onChange = {(e) => setSkills(e.target.value)}/>
                <div className = 'skill-buttons'>
                    <button onClick = {() => {
                        setSkillsEdit(false) 
                        setSkills('')
                    }} className = 'cancelSkill-btn'>cancel</button>
                    <button onClick = {() => addSkill()} className = 'addSkill-btn'>Submit</button>
                </div>
                </>
                : <button className = 'addSkill-btn' onClick = {() => setSkillsEdit(!showSkillsEdit)}
                  >Add skill +</button>
            }
            {
                skillsArray.map((skill, i) => {
                    return (
                        <div key = {i} className = "skill-item">
                            <li>{skill}</li>
                            <button onClick = {() => removeSkill(i) }><MdDelete size = '25px'/></button>
                        </div>
                    )
                })
            }

        </section>
    );
};

export default Skills