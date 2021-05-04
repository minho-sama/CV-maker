import './preview.css';
import {BsFillHouseFill} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import {MdLocalPostOffice} from 'react-icons/md';
import {FaGripLinesVertical} from 'react-icons/fa'

export function Preview ({userInfo, eduInfo}) {
    const {firstName, lastName, address, phoneNum, emailAddress} = userInfo;
    const {schoolName, fromDate, toDate, degree, achievements} = eduInfo;

    return ( 
        <section className = 'preview-form'>
            <div className = "info-box">
                <div className = 'name-container'> 
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
            <div className = 'education-container'>
                <h2>Education</h2>
                <div className = "edu-inline">
                    <p>{schoolName} <FaGripLinesVertical/> {degree}</p>
                </div>
                <p>{fromDate === "" ? 'MM/DD/YYYY' : `${fromDate}`} - {toDate === "" ? 'Present' : `${toDate}`}</p>
                <p className = 'underline'>Description, Achievements: </p>
                <p className = "indent">{achievements}</p>
            </div>
            <hr/>
        </section>
    );
}

export default Preview