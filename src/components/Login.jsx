import React from 'react'
import {signInWithPopup } from "firebase/auth";
import {auth,provider} from '../firebase-config';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsAuth}) => {
    const navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup (auth,provider).then((result)=>{
            console.log(auth); 
            localStorage.setItem ('isAuth',true); 
            setIsAuth(true);
            navigate('/');
        })
    }
    
  return (
    <div className='container'>
        <div className='card mt-5 text-center'>
            <div className='card-body'>
                <p className='display-6 mt-3'>Sign-In with Google</p> 

                <button className='btn btn-dark' onClick={()=>signInWithGoogle()}>Google</button>
            </div>
        </div>
    </div>
  )
}

export default Login;