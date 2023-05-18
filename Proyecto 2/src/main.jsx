import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from '@authentication/AuthContext'
import Routing from './routers/Routing'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<div>
// 		<div>
// 			<h1>Bienvenido Peko Chama!</h1>
// 			<button>LogOut</button>
// 		</div>
// 		<p>BIENVENIDO !</p>
// 	</div>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<Routing />
		</AuthProvider>
	</React.StrictMode>,
)
