
export function WorkEditMode({workProps, id}){
    console.log(id)
    const {workInfos, setWorkInfos, workArr, workEditMode, setWorkEditMode, setWorkArr, addWork} = workProps;
    console.log(workArr) 
    return (
        <>
        <hr/>
        <div className = 'edu-border'>
        <label>Company: </label>
        <input type = 'text' value = {workInfos.company} onChange = {(e) => setWorkInfos({...workInfos, company: e.target.value})}></input>
        <label>Position: </label>
        <input type = 'text' value = {workInfos.position} onChange = {(e) => setWorkInfos({...workInfos, position: e.target.value})}></input>
        <div className = "edu-date">
            <label>from: </label>
            <input type = 'text' value = {workInfos.from} onChange = {(e) => setWorkInfos({...workInfos, from: e.target.value})}></input>
            <label>to: </label>
            <input type = 'text' value = {workInfos.to} onChange = {(e) => setWorkInfos({...workInfos, to: e.target.value})}></input>
        </div>
        <label>Description: </label>
        <input type = 'textarea' value = {workInfos.description} onChange = {(e) => setWorkInfos({...workInfos, description: e.target.value})}></input>

        <div className = 'skill-buttons'>
            <button onClick = {() => {
                setWorkInfos({company: "", position: "", from: "", to: "", description: "", id: ""})
                setWorkEditMode(false)
            }} className = 'cancelSkill-btn'> cancel </button> 

            <button onClick = {() => {
                addWork(id)
            }} className = 'addSkill-btn'> Submit</button>
            </div>
        </div>
        </>
    )
}

export default WorkEditMode