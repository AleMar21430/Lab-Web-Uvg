import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom'
import Home from '@pages/home'
import LogIn from '@pages/logIn'
import SignIn from '@pages/signIn'
import ProtectedRoute from '@routers/protectedRoute/ProtectedRoute'

export default function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={
					<ProtectedRoute>
						<Home/>
					</ProtectedRoute>
					}>
				</Route>
				<Route path="/logIn" element={
					<LogIn/>
					}>
				</Route>
				<Route path="/signIn" element={
					<ProtectedRoute>
						<SignIn/>
					</ProtectedRoute>
					}>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}