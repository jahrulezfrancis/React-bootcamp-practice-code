import React, { useState } from 'react';
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
    const [email, setEmail] = useState('')
    const [userMail, setUserMail] = useState('');

    function HandleChange(e) {
        setEmail(e.target.value)
    }

    function MailSetter(e) {
        setUserMail(email)

        e.preventDefault()
    }


    return (
        <div>
            <form>
                <div style={{ display: 'grid', gap: '1em' }}>
                    <h1>{userMail}</h1>
                    <label htmlFor="email">Email</label>
                    <Input type='text' onChange={HandleChange} value={email} placeHolder='enter you email' />
                    <button onClick={MailSetter}>Submit</button>
                </div>
            </form>
        </div>
    )
}