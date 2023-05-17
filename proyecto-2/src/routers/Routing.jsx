'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Home from './../pages/home'
import LogIn from './../pages/logIn'
import SignIn from './../pages/signIn'
import ProtectedRoute from './../routers/protectedRoute/ProtectedRoute'

export default function Routing() {
	const router = useRouter()

	return (
		<div>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/logIn">Log In</Link>
				<Link href="/signIn">Sign In</Link>
			</nav>

			<ProtectedRoute>
				{router.pathname === '/' && <Home />}
				{router.pathname === '/logIn' && <LogIn />}
				{router.pathname === '/signIn' && <SignIn />}
			</ProtectedRoute>
		</div>
	)
}