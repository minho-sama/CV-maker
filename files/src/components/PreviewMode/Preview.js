import './preview.css';
import {BsFillHouseFill} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import {MdLocalPostOffice} from 'react-icons/md';
import {FaGripLinesVertical} from 'react-icons/fa'

export function Preview ({userInfo, workArr, eduInfo, skillsArray}) {
    const {firstName, lastName, address, phoneNum, emailAddress} = userInfo;
    const {schoolName, fromDate, toDate, degree, achievements} = eduInfo;

    return ( 
        <section className = 'preview-form'>
            <div className = "info-box">
                <div className = 'name-container indent-title'> 
                    <p>{firstName === "" ? 'First Name' : `${firstName}`}</p>
                    <p>{lastName === "" ? 'Last Name' : `${lastName}`}</p>
                </div>
                <div className = 'data-container'>
                    <p> <BsFillHouseFill/> {address === "" ? 'address' : `${address}`}</p>
                    <p> <AiFillPhone/> {phoneNum === "" ? '00-000-000' : `${phoneNum}`}</p>
                    <p> <MdLocalPostOffice/> {emailAddress === "" ? 'email' : `${emailAddress}`}</p>
                </div>
            </div>
            <hr/>

            { workArr.length > 0 &&
                <div className = 'work-container'>
                    <h2 className = "indent-title">Work</h2>
                    {
                        workArr.map((work,i) => {
                            return(
                                <div key = {i}>
                                <h3>{work.company}</h3>
                                <ul>
                                    <li>Role: {work.position}</li>
                                    <li>{work.from} - {work.to === "" ? "Present" : `${work.to}`}</li>
                                    <li>{work.description}</li>
                                </ul>
                                <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            }

            <div className = 'education-container'>
                <h2>Education</h2>
                <div className = "edu-inline">
                    <p>{schoolName} <FaGripLinesVertical/> {degree}</p>
                </div>
                <li><span>Years: </span> {fromDate === "" ? 'MM/DD/YYYY' : `${fromDate}`} - {toDate === "" ? 'Present' : `${toDate}`}</li>
                <li className = 'underline'>Description, Achievements: </li>
                <p className = "indent">{achievements}</p>
            </div>
            <hr/>
            <div className = "skills-container">
                <h2 className = "indent-title">Skills</h2>
                {
                    skillsArray.map((skill, i) => {
                        return <li key = {i}>{skill}</li>
                    })
                }
            </div>
        </section>
    );
}

export default Preview