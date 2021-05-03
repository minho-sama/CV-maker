import Info from './Info/info'
import './edit-global.css'

export function Edit (infoProps) {
return (
    <>
    <article>
        <Info infoProps = {infoProps}/>
    </article>
    <article><p>education</p></article>
    <article><p>work</p></article>
    <article><p>skills</p></article>
    </>
)

}

export default Edit