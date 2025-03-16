import React, { useState } from 'react'
import styles from './login.module.scss'
import PageLayout from '../../components/Layouts/page-layout'
import TextInput from '../../components/Inputs/text-input'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { baseUrl } from '../../services/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/features/user.slice'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const onSubmitLogin = async (e) => {


        let emailError, passwordError = "";

        if (!Helpers.validateEmail(email)) {
           emailError = "Invalid Email"
        }

        if (!Helpers.validatePassword(password)) {
            passwordError = "Password must be 8 alphanumeric characters"
        }

        if (emailError || passwordError) {
            setErrors({email: emailError, password: passwordError})
        }else{
            setLoader(true)
            try {
                const payload = {email,password}
                const response = await axios.post(`${baseUrl}/user/login`, payload)

                setErrors({email: "", password: ""})

                navigate("/")
                dispatch(addUser(response?.data?.data))
                setLoader(false)

                console.log(response, "<--- Login Response")
            } catch (error) {
                setLoader(false)
                console.error(error);
                
            }

        }

    }

  return (
    <>
    <PageLayout>

        <div className={`${styles.main}`}>

            <div className={`${styles.auth_card} text-center p-4`}>
                <h2>Login</h2>


                <TextInput
                type='email'
                placeholder='Email'
                style={{marginBottom: "20px", marginTop: "10px"}}
                required
                onChange={setEmail}
                value={email}
                err_msg={errors.email}

        
                ></TextInput>

                <TextInput
                 type='password'
                 placeholder='Password'
                 style={{marginBottom: "20px", marginTop: "10px"}}
                 required
                 onChange={setPassword}
                 value={password}
                 err_msg={errors.password}
 
                >

                </TextInput>


                <button type='submit' onClick={onSubmitLogin}>
                    {loader ? 
                    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                     : "Sign in" }
                </button>

                <div className={`${styles.to_navigate}`}>
                <p>If you don't have an account <NavLink to={'/sign-up'}>Sign up</NavLink></p>

                </div>

            </div>


        </div>

    </PageLayout>
    </>


  )
}

export default Login