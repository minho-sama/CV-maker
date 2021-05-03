import ModeButton from './ModeButton/ModeButton'
import './header.module.css'
import { FiPaperclip } from 'react-icons/fi';

export function Header({mode, setMode}) {
    
    return (
        <header>
            <h2>CV Maker <FiPaperclip size = "25px"/></h2>
            <ModeButton mode = {mode} setMode = {setMode}/>
            <a href = "https://github.com/minho-sama/CV-maker">minh 2021</a>
        </header>
    )
}
export default Header