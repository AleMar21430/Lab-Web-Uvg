'use client'

import './LogIn.css'
import React, { useState } from 'react'
import { useAuth } from './../../context/AuthContext'
import { useRouter } from 'next/navigation'

const LogIn = () => {
	const auth = useAuth()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [emailErrorMessage, setEmailErrorMessage] = useState("")
	const [emailValidation, setEmailValidation] = useState(false)
	
	const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
	const [passwordValidation, setPasswordValidation] = useState(false)

	const navigate = useRouter()

	const handleLogIn = async (e) => {
		e.preventDefault()
		
		try {
		await auth.logIn(email, password)
		navigate.push("/")
		} catch (error) {
		if(error.code === "auth/user-not-found"){
			setEmailErrorMessage("Usuario no existente")
			setEmailValidation(true)
		}else if(error.code === "auth/wrong-password")
		setPasswordErrorMessage("Contraseña incorrecta")
		setPasswordValidation(true)
		}
	}
	const handleGoogle = async (e) => {
		e.preventDefault()
		try{
		await auth.logInWithGoogle()
		navigate.push("/")
		}catch (error) {
		return
		}
		
	}
	return (
		<div className="Box">
		<div className="logIn-container">
			<form action="">
				<h1 className="tittle">Iniciar Sesión</h1>
				<div>
					<input id="email" type="email" label="Correo electrónico" onChange={(e) => setEmail(e.target.value)} error={emailValidation} helperText={emailErrorMessage}/>
					<input id="password" type="password" label="Contraseña" onChange={(e) => setPassword(e.target.value)} error={passwordValidation} helperText={passwordErrorMessage}/>
					<button type="submit" onclick={(e) => handleLogIn(e)}>
						Iniciar Sesión
					</button>
					<button type="submit" onclick={(e) => handleGoogle(e)}>
						Iniciar Sesión con Google
					</button>
				</div>
				<p>
					Crea una cuenta
					<a href="./signIn" className="logIn-text">Aquí</a>
				</p>
			</form>
		</div>
		</div>
		
	)
}

export default LogIn