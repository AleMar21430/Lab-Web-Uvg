import React from 'react'
import {useAuth} from '@authentication/AuthContext'
import styles from './Home.module.css'

const Home = () => {
	const { user, logOut } = useAuth()

	const handleLogOut = async () => {
		await logOut()
	}
	return (
		<div>
			<div>
				<h1 class={styles.User}>Bienvenido {user.email}</h1>
				<button  onClick={handleLogOut}>LogOut</button>
			</div>
			<p>BIENVENIDO !</p>
		</div>
	)
}

export default Home