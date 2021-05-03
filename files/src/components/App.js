import {useState} from 'react'
import '../index.css'
import Header from './Header/Header'
import Edit from './EditMode/Edit'
import Preview from './PreviewMode/Preview'

function App() {
  //if true: edit mode, if false: preview mode
  const [mode, setMode] = useState(true)
  console.log(mode)

  return (
    <> 
      <Header mode = {mode} setMode = {setMode}/>

      <div className = "form">

      { mode ? <Edit/> : <Preview/>}

      </div>
    </>
  );
}

export default App;

