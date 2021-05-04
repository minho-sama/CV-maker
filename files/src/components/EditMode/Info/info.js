import {AiFillInfoCircle} from 'react-icons/ai'
import {BsFillHouseFill} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import {MdLocalPostOffice} from 'react-icons/md';

export function Info({infoProps}) {

const {firstName, setFirstName, lastName, setLastName, address, setAddress, phoneNum, 
        setPhoneNum, emailAddress, setEmailAddress} = infoProps;
    return (
        <section className = 'info-container'>
            <h2>Info</h2>
            <AiFillInfoCircle className = 'icon-logo' size = "30px"/>

            <label>First name: </label>
            <input type = 'text' value = {firstName} onChange = {(e) => setFirstName(e.target.value)} name = "firstName" placeholder = "Enter Your first name"/>

            <label>Last name: </label>
            <input type = 'text' value = {lastName} onChange = {(e) => setLastName(e.target.value)} name = "lastName" placeholder = "Enter Your last name"/>

            <div className = "info-parent">
                <label>address: <BsFillHouseFill className = 'icon-right'/> </label>
                <input type = 'text' value = {address} onChange = {(e) => setAddress(e.target.value)} name = "address" placeholder = "Enter Your address"/>
            </div>
            <div className = "info-parent">
                <label> phone: <AiFillPhone className = 'icon-right'/></label>
                <input type = 'number' value = {phoneNum} onChange = {(e) => setPhoneNum(e.target.value)}name = "phone" placeholder = "Enter Your phone number"/>
            </div>
            <div className = "info-parent">
                <label>email: <MdLocalPostOffice className = 'icon-right'/></label>
                <input type = 'text' value = {emailAddress} onChange = {(e) => setEmailAddress(e.target.value)} name = "email" placeholder = "Enter Your email adress"/>
            </div>
        </section>
    )
}
    

export default Info