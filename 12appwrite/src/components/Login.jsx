import React,{useState} from 'react'
import { Link,  Navigate, useNavigate   } from 'react-router-dom'
import {Loin as authLogin} from '../store/authSlice'
import {Button, Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"


function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const {error, setError} = useState("")
  
  
    const login = async(data) =>{
        setError("");
        try{
            const session = await authService.login(data);
            if(session){
                const userData = await authService.
                getCurrentUser()
                if(userData) dispatch(authLogin(userData))
            }

        }catch(error){
            setError(error.message);
        }
    }

  return (
    


  )
}

export default Login
