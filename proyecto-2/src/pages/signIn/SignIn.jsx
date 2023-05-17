'use client'

import React, { useState } from 'react'
import './SignIn.css'
import {useAuth} from './../../context/AuthContext'
import { useRouter } from 'next/navigation'

const hoverButtons = {
	'&:hover':{
		backgroundColor: 'rgba(1, 167, 245, 0.3)',
		color:'black',
		transition:'0s'
	}
}
const firstIcon = {
	height: '25px',
	width: '25px',
	position: 'absolute',
	left: '30px',
	bottom: 0,
	top: '3px',
	alignSelf: 'flex-start',
	pointerEvents: 'none',
	display: 'flex',
}

export default function SignIn() {
	const auth = useAuth()
	const [emailRegister, setEmailRegister] = useState("")
	const [passwordRegister, setPasswordRegister] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [passwordValidation, setPasswordValidation] = useState(false)
	const [emailError, setEmailError] = useState("")
	const [emailValidation, setEmailValidation] = useState(false)

	const navigate = useRouter()
	
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	}

	// Verifying if the user and password are validates when press the register button
	const handleRegister = async (e) => {
		e.preventDefault()
		if(passwordRegister.length < 6){
		setPasswordError("La contraseña debe poseer 6 caracteres")
		setPasswordValidation(passwordRegister.length < 6)
		return
		}else if(!validateEmail(emailRegister)){
		setEmailError("Correo no valido")
		setEmailValidation(true)
		}

		try {
		await auth.signUp(emailRegister, passwordRegister)
		navigate.route("/")
		} catch (error) {
		if(error.code === "auth/email-already-in-use"){
			setEmailError("Usuario (correo) ya utilizado")
			setEmailValidation(true)
		}
		}
		
	}
	const handleGoogle = async (e) => {
		e.preventDefault()
		try {
		await auth.logInWithGoogle()
		navigate.route("/")
		
		} catch (error) {
		return
		}
	}
	return (
		<div className="Box">
		<div className="register-container">
			<form>
				<h1 className="title">Registrarse</h1>
				<div>
					<input id="email" type="email" label="Correo electrónico" onChange={(e) => setEmailRegister(e.target.value)} error={emailValidation} helperText={emailError}/>
					<input id="password" type="password" label="Contraseña" onChange={(e) => setPasswordRegister(e.target.value)} error={passwordValidation} helperText={passwordError}/>
					<button onClick={(e) => handleRegister(e)}>
						Registrase
					</button>
					<button onClick={(e) => handleGoogle(e)}>
						Registrase con Google
					</button>
				</div>
				<p className="account-text">
					¿Ya tienes cuenta?
					<a href="/logIn" className="logIn-text">LogIn</a>
				</p>
			</form>
		</div>
		</div>
	)
}