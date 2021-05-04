import {useState} from 'react';
import {BiDotsHorizontal} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'

export function WorkCard({workProps, id}) {
    const [showDescription, setShowDescription] = useState(false)

    const {workArr, removeWork} = workProps;
    const workObj = workArr[id];
    const {company, position, from, to, description} = workObj
    return (
        <>
        <hr/>
        <div className = "work-container"> 
            <span className = "work-card">
                <p>{company}</p><p>{position}</p><p>{from} - {to}</p>
            </span>
        {
            showDescription ? 
            <>
            <button onClick = {() => setShowDescription(!showDescription)} className = "description-btn descriptionDel-btn"><ImCross/></button> 
            <div className = 'description'>{description}</div>
            </>: 
            <button onClick = {() => setShowDescription(!showDescription)} className = "description-btn"><BiDotsHorizontal/></button>
        }
        <button onClick ={() => removeWork(id)} className = "cancelSkill-btn deleteWork-btn" >Delete</button>
        </div>
        </>
    )
}

export default WorkCard