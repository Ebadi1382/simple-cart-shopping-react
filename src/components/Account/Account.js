import axios from '../../axios-order'
import React, { useState } from 'react'
import Input from '../Ui/Input/Input'
import  "./Account.css"
import { Link } from 'react-router-dom'

const Account = () => {

    const [nameForm, setNameForm] = useState("")
    const [emailForm, setEmailForm] = useState("")
    const [passwordForm, setPasswordForm] = useState("")
    const [errorLogIn, setErrorLogIn] = useState(false)

        const nameChangeHandler = (e)=> {
            setNameForm(e.target.value)
        }
        const emailChangeHandler = (e)=> {
            setEmailForm(e.target.value)
        }
        const passwordChangeHandler = (e)=> {
            setPasswordForm(e.target.value)
        }
        const data = {
            name:nameForm,
            email:emailForm,
            password:passwordForm
        }
        const clickSendDataHandler = (e)=> {
            e.preventDefault()
            axios.post("/logIn.json",data).then((Response)=> {
                console.log(Response)
            })
            .catch((error)=> {
                setErrorLogIn(true)
            })
            setNameForm("")
            setEmailForm("")
            setPasswordForm("")
        }
        const resetLogIn = ()=> {
            setErrorLogIn(false)
        }
  return (
    <React.Fragment>
    {!errorLogIn?<div className="card">
        <h4 className="title-logIn">Please Log IN!</h4>
        <form>
        <div className="field">
        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z">
        </path>
        </svg>
      <Input type="text" onChange={nameChangeHandler} placeholder="name" InputType="input" value={nameForm}/>
        </div>
        <div className="field">
        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z">
      </path></svg>
      <Input type="email" onChange={emailChangeHandler} placeholder="email" InputType="input" value={emailForm} />
        </div>
        <div className="field">
        <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z">
        </path></svg>
      <Input type="password" onChange={passwordChangeHandler} placeholder="password" InputType="input" value={passwordForm} />
        </div>
        <button onClick={clickSendDataHandler} className="btn-logIn">Log In</button>
        </form>
    </div>:<div>
    <p style={{textAlign:"center"}} className="mt-5">Log In Faild</p>
    <p style={{textAlign:"center"}} onClick={resetLogIn}>Click Me To Try Again!</p>
        </div>}
    </React.Fragment>
  )
}

export default Account
