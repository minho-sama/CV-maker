import {useState} from 'react';
import {MdWork} from 'react-icons/md';
import WorkEditMode from './WorkEditMode';
import WorkCard from './WorkCard';

export function Work ({workProps}){

    const {workArr, workEditMode, setWorkEditMode} = workProps;
    
    return (
        <>
        <section className = 'info-container'>
            <h2>Work</h2>
            <MdWork className = 'icon-logo' size = '30px'/>

            <>
            {workEditMode ? 
                <WorkEditMode workProps = {workProps}/>  
                :
                <button onClick = {() => 
                    setWorkEditMode(!workEditMode)
                    } className = 'addSkill-btn'>+ Add Workplace</button> 
            }
            </>

            {   
                workArr.length > 0 && 
                workArr.map((workObj, id) => {
                    return <WorkCard key = {id} workProps = {workProps} id = {id}/>
                })
            }

        </section>
        </>
    )
};

export default Work

// : 
// 
// }