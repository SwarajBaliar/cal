import React, { useState } from 'react'

const BasicForm = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const [allEntry,setAllEntry]= useState([]);

    const submitForm  = (e) =>{
        e.preventDefault();
        const newEntry = {email: email, password:password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }
    return (
        <div>
            <form action='' onSubmit={submitForm}>
                <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name="" id="" value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                </div>

                <div>

                <label htmlFor='password'>password</label>
                <input type="text" name="" id="" value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                </div> 
                <button type='submit'> Login</button>

            </form>
        </div>
    )
}

export default BasicForm