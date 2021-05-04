import Info from './Info/info'
import './edit-global.css'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Work from './Work/Work'

export function Edit (allProps) {

//i'm actually passing down ALL the props (allProps = {allProps})

return (
    <>
    <article>
        <Info infoProps = {allProps}/>
    </article>
    <article><Work workProps = {allProps}/></article>
    <article><Education eduProps = {allProps}
    /></article>

    <article>
        <Skills skillsProps = {allProps}/>
        </article>
    </>
)

}

export default Edit