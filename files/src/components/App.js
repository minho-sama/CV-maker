import {useState} from 'react'
import '../index.css'
import Header from './Header/Header'
import Edit from './EditMode/Edit'
import Preview from './PreviewMode/Preview'

function App() {
  //if true: edit mode, if false: preview mode
  const [mode, setMode] = useState(true)

  //user Infos
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [emailAddress, setEmailAddress] = useState("")

  const userInfoArr = {firstName, lastName, address, phoneNum, emailAddress}

  return (
    <> 
      <Header mode = {mode} setMode = {setMode}/>

      <div className = "form">

    { mode ? <Edit {...{firstName, lastName, address, phoneNum, emailAddress, 
                        setFirstName, setLastName, setAddress, setPhoneNum, setEmailAddress,}}
              /> : 
              <Preview userInfo = {userInfoArr} />
              }

      </div>
    </>
  );
}

export default App;

