import styles from './page.module.css'

import { AuthProvider } from './../context/AuthContext'
import Routing from './../routers/Routing'

export default function Home() {
	return (
		<main className={styles.main}>
			<AuthProvider>
				<Routing />
			</AuthProvider>
		</main>
	)
}
