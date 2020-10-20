import React,{Fragment} from 'react';
import Fullname from './FullName';
import Bio from './Bio';
import Profession from './Profession';


const Profile = ({children}) =>{
    const handlclick = (e) =>{
        // e.preventDefault()
        alert("my name is Mohamed Salah Belkhiria")
    }
    return (
        <div >  
            <h1>Hello</h1>
            <Fullname fullName = " Mohamed Salah Belkhiria " />
            <Bio bio = "a 26 year old web developer based in Sousse, Tunisia."/>
            <Profession profession = " Full Stack Web Developer " />
            <Fragment >{children}</Fragment>
            <br />
            <button onClick={handlclick}  style={{padding :"10px",margin:"20px", fontSize: "20px", borderRadius:"20px"}}>About me</button>
        </div>
    )
}

export default Profile