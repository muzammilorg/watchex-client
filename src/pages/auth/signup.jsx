import React, { useState } from 'react'
import styles from './signup.module.scss'
import PageLayout from '../../components/Layouts/page-layout'
import TextInput from '../../components/Inputs/text-input'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { baseUrl } from '../../services/constant'
import { addUser } from '../../redux/features/user.slice'

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  })


  const onSubmitSignUp = async (e) => {
    e.preventDefault(); 

    let nameError, emailError, passwordError = "";

    if (!Helpers.validateEmail(email)) {
      emailError = "Invalid Email"
    }

    if (!Helpers.validatePassword(password)) {
      passwordError = "Password must be 8 alphanumeric characters"
    }

    if (!Helpers.validateName(name)) {
      nameError = "Name must be 3 characters"

    }

    if (nameError || emailError || passwordError) {
      setErrors({ name: nameError, email: emailError, password: passwordError })
    } else {

      setLoader(true)

      try {

        const payload = { name, email, password }
        const response = await axios.post(`${baseUrl}/user/signup`, payload)

        setErrors({name: "", email: "", password: ""})
        navigate("/sign-in")
        setLoader(false)



      } catch (error) {
        setLoader(false)
        console.error(error)

      }
    }


  }

  return (
    <>
      <>
        <PageLayout>

          <div className={`${styles.main}`}>

            <div className={`${styles.auth_card} text-center p-4`}>
              <h2>Sign up</h2>

              <TextInput
                type='text'
                placeholder='Name'
                style={{ marginBottom: "10px" }}
                value={name}
                onChange={setName}
                required
                err_msg={errors.name}


              ></TextInput>



              <TextInput
                type='email'
                placeholder='Email'
                style={{ marginBottom: "10px" }}
                value={email}
                onChange={setEmail}
                required
                err_msg={errors.email}

              ></TextInput>

              <TextInput
                type='password'
                placeholder='Password'
                style={{ marginBottom: "20px" }}
                value={password}
                onChange={setPassword}
                required
                err_msg={errors.password}

              >

              </TextInput>


              <button type='submit'  onClick={onSubmitSignUp}>               
                {loader ? 
                    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                     : "Sign up" }
                </button>

              <div className={`${styles.to_navigate}`}>
                <p>Already have an account <NavLink to={'/sign-in'}>Sign in</NavLink></p>

              </div>

            </div>


          </div>

        </PageLayout>
      </>

    </>
  )
}

export default Signup