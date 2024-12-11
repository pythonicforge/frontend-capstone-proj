import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'


const Nabvar = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="navbarMainContainer">

        <div className="navbarContainer">
            <div className="navbarLogo">
                <h1>Capstone</h1>
            </div>
            <div className="navbarMenu">
                <ul>
                    <li>
                        <button onClick={()=>{
                            navigate('/user-onboard')
                        }} >Register</button>
                    </li>
                    <li>
                        <button onClick={()=>{
                            navigate('/project-submission')
                        }} >Submit Project</button>
                    </li>
                    <li>
                        <button onClick={()=>{
                            navigate('/')
                        }} >Ask Query</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nabvar