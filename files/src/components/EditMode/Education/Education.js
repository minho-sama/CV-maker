import {IoIosSchool} from 'react-icons/io';

export function Education({eduProps}) {
    const {schoolName, fromDate, toDate, degree, achievements, setSchoolName, setFromDate, setToDate, setDegree, setAchievements} = eduProps;
    return (
        <section className = 'info-container edu-border'>
            <h2> Education
                <IoIosSchool className = 'icon-logo' size = "30px"/></h2>
            <label>School, University: </label>
            <input type = "text" value = {schoolName} onChange = {(e) => setSchoolName(e.target.value)}/>
            <div className = "edu-date">
                <label>from: </label>
                <input type = "text" value = {fromDate} onChange = {(e) => setFromDate(e.target.value)} placeholder = "MM/DD/YYYY"/>
                <label>to: </label>
                <input type = "text" value = {toDate} onChange = {(e) => setToDate(e.target.value)}placeholder = "Present"/>
            </div>
            <label>Degree or Stream: </label>
            <input type = "text" value = {degree} onChange = {(e) => setDegree(e.target.value)}/>

            <label>Further description, achievements: </label>
            <textarea type = "textarea" value = {achievements} onChange = {(e) => setAchievements(e.target.value)}/>

        </section>
    );
}

export default Education