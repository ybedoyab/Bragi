import React from 'react'
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import { useNavigate } from "react-router-dom"
import './Login.css'
import Img from '../../public/bg-2.png'
import LogoTextoCuadrado from '../../public/LogoTextoCuadrado.png'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='login-content'>
      <div className='content-container'>
        <div className="text-container">
        <img src={LogoTextoCuadrado} alt="" />
        <h3>Inicia sesion con internet identity para acceder</h3>
      <ConnectButton onConnect={() =>{ navigate('/')}} />
        <ConnectDialog />
        </div>
        
      </div>
        
        <div className='img-container'>
          <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default Login