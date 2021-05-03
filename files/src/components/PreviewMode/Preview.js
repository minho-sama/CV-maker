import './preview.css'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {MdLocalPostOffice} from 'react-icons/md'

export function Preview ({userInfo}) {
    const {firstName, lastName, address, phoneNum, emailAddress} = userInfo
    return ( 
        <section className = 'preview-form'>
            <p>{firstName === "" ? 'First Name' : `${firstName}`}</p>
            <p>{lastName === "" ? 'Last Name' : `${lastName}`}</p>

            <p> <BsFillHouseFill/> {address === "" ? 'address' : `${address}`}</p>
            <p> <AiFillPhone/> {phoneNum === "" ? '00-000-000' : `${phoneNum}`}</p>
            <p> <MdLocalPostOffice/> {emailAddress === "" ? 'email' : `${emailAddress}`}</p>
        </section>
    )
}

export default Preview