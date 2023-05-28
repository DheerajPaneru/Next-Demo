import React, { useEffect, useState } from 'react'

const Modal = (props) => {

    const [user, setuser] = useState({
        username: "",
        email: "",
        lastName: "",
        firstName: "",
        gender:""
    })
useEffect(()=>{
setuser(props.data)
},[])

    return (

        <div className='modalbox'>

            <label>username</label>
            <input value={user.username}></input>

            <label>email</label>
            <input value={user.email}></input>

            <label>firstname</label>
            <input value={user.firstName}></input>

            <label>gender</label>
            <input value={user.gender}></input>

            <label>lastname</label>

            <input value={user.lastName}></input>
<button onClick={()=>props.off()}>Cancel</button>

        </div>
    )
}

export default Modal