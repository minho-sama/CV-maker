import Info from './Info/info'
import './edit-global.css'
import Education from './Education/Education'
import Skills from './Skills/Skills'

export function Edit (allProps) {

//i'm actually passing down ALL the props (allProps = {allProps})

return (
    <>
    <article>
        <Info infoProps = {allProps}/>
    </article>
    <article><Education eduProps = {allProps}
    /></article>

    <article><p>work</p></article>

    <article>
        <Skills skillsProps = {allProps}/>
        </article>
    </>
)

}

export default Edit