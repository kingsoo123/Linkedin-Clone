import React, {useState} from 'react'
import './login.css'
import {useDispatch} from 'react-redux'
import {auth} from './firebase'
import { login } from './features/userSlice'

function Login() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic]  = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.profilePic
            }))
        })
        .catch(error=>{alert(error.message)})
    }
    const register = ()=>{
        if(!name) return alert('Please enter a full name')

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(()=>{
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
            }))
           })
        }).catch((error)=>{alert(error.message)})
       
    }
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-2003.jpg" alt=""/>
            <form>
                <input placeholder="Full name is required" type="text" value={name} onChange={(e)=>{setName(e.target.value )}}/>
                <input placeholder="Profile picture Url(OPTIONAL)" type="text" value={profilePic} onChange={(e)=>{setProfilePic(e.target.value)}}/>
                <input placeholder="Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input placeholder="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="button" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? {" "}
                <span className="login_register" onClick={register}> Register now</span>
            </p>
        </div>
    )
}

export default Login
