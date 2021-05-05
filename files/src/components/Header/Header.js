import ModeButton from './ModeButton/ModeButton'
import './header.module.css'
import { FiPaperclip } from 'react-icons/fi';
import {DiGithubBadge} from 'react-icons/di'

export function Header({mode, setMode}) {
    
    return (
        <header>
            <h2>CV Maker <FiPaperclip size = "25px"/></h2>
            <ModeButton mode = {mode} setMode = {setMode}/>
            <a href = "https://github.com/minho-sama/CV-maker">minh 2021<DiGithubBadge size = '16px'/></a>
        </header>
    )
}
export default Header