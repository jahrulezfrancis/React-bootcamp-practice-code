import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';

// function WelcomeMessage() {
//     return (
//         <>
//             <h1>Welcome Back Mother Fucker</h1>
//         </>
//     )
// }


// export function LoginForm() {
//     const [email, setEmail] = useState('')
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     const CurrentTime = new Date().toLocaleTimeString()

//     const [time, setTime] = useState(CurrentTime)

//     setInterval(() => { UpdateTime() }, 1000);
//     function UpdateTime() {
//         const CurrentTime = new Date().toLocaleTimeString()
//         setTime(CurrentTime)
//     }

//     function HandleChange(e) {
//         setEmail(e.target.value)
//     }

//     return (
//         <div >
//             {email}
//             <form style={{ display: 'grid', rowGap: '1em' }}>
//                 <label htmlFor="email">Email Address</label>
//                 <Input type='email' onChange={HandleChange} value={email} name="email" />
//                 <label htmlFor="password">Password</label>
//                 <Input type='password' name="password" />
//                 <Input onClick={() => { !isLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false) }} type='submit' value='Login' />
//             </form>
//             <h4>The time is {time} </h4>
//         </div>
//     )
// }


// export function Login(props) {

//     return (
//         (!props.isLoggedIn) ? <LoginForm /> : <WelcomeMessage />

//     )
// }



export function Login() {
    const [fullName, setFullName] = useState({
        FName: '',
        LName: '',
        Email: ''
    })

    const [blogData, setBlogData] = useState(null);

    function HandleChange(e) {
        const { name, value } = e.target;

        setFullName(PrevValue => {
            return {
                ...PrevValue,
                [name]: value
            }
        })
        e.preventDefault()
    }

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(fullName)
    }


    const ChangingNames = () =>{setStudentNames('Pupu')}

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(Received => setBlogData(Received))
    }, [ChangingNames]);


    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <div className='form-container'>
                    <h1>Hello {fullName.FName} {fullName.LName} </h1>
                    <p> {fullName.Email} </p>
                    <label htmlFor="FName">First Name</label>
                    <Input name='FName' type='text' onChange={HandleChange}
                        value={fullName.FName}
                        placeHolder='enter your first name' />
                    <label htmlFor="LName">First Name</label>
                    <Input name='LName' type='text' onChange={HandleChange}
                        value={fullName.LName}
                        placeHolder='enter your Last Name' />
                    <label htmlFor="Email">First Name</label>
                    <Input name='Email' type='email' onChange={HandleChange}
                        value={fullName.Email}
                        placeHolder='enter your Last Name' />
                    <Button type='submit' onClick={HandleSubmit} text='Submit' />
                </div>
            </form>
        </div>
    )
}