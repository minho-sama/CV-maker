import {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header/Header';
import Edit from './EditMode/Edit';
import Preview from './PreviewMode/Preview';

function App() {
  //if true: edit mode, if false: preview mode
  const [mode, setMode] = useState(true);

  //user Infos
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const userInfoObj = {firstName, lastName, address, phoneNum, emailAddress};

  //education infos
  const [schoolName, setSchoolName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [degree, setDegree] = useState('');
  const [achievements, setAchievements] = useState('');
  const eduObj = {schoolName, fromDate, toDate, degree, achievements};


  //skills
  const [skills, setSkills] = useState([]);
  const [skillsArray, setSkillsArray] = useState([])
  const [showSkillsEdit, setSkillsEdit] = useState(false)

  const addSkill = () => {
    setSkillsArray(
      () => skillsArray.concat(skills)
      );
    setSkills('')
    setSkillsEdit(false)
  };

  const removeSkill = (id) => {
    console.log(id)
    let filteredArr = skillsArray.filter((skill) => {
      return skillsArray[id] !== skill
    })
    console.log(filteredArr)
    setSkillsArray(filteredArr)
  };

  //work
  const [workInfos, setWorkInfos] = useState({id: "", company: "", position: "", from: "", to: "", description: ""});
  const [workArr, setWorkArr] = useState([]);
  const [workEditMode, setWorkEditMode] = useState(false);

  useEffect(() => {
    console.log(workInfos)
  }, [workInfos])

  const addWork = () => {
    setWorkArr((prevState) => [...prevState, workInfos])
    setWorkInfos({id: "", company: "", position: "", from: "", to: "", description: ""})
  }; console.log(workArr)

  const removeWork = (id) => {
    let filteredArr = workArr.filter((work) => {
      return workArr[id] !== work
    })
    setWorkArr(filteredArr)
  }; 

  return (
    <> 
      <Header mode = {mode} setMode = {setMode}/>

      <div className = "form">

    { mode ? <Edit {...{firstName, lastName, address, phoneNum, emailAddress, 
                        setFirstName, setLastName, setAddress, setPhoneNum, setEmailAddress,}}
                   {...{schoolName, fromDate, toDate, degree, achievements,
                        setSchoolName, setFromDate, setToDate, setDegree, setAchievements}}
                   {...{skills, setSkills, addSkill, removeSkill, skillsArray, showSkillsEdit, 
                        setSkillsEdit}}
                   {...{workInfos, workArr, setWorkInfos, setWorkArr, workEditMode, setWorkEditMode, addWork, removeWork}}
              /> : 
              <Preview userInfo = {userInfoObj} eduInfo = {eduObj} />
              }

      </div>
    </>
  );
}

export default App;
 
