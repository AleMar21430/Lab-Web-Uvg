import { useRouter } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'

export default function ProtectedRoute ({children}) {
	const {user} = useAuth()
	const router = useRouter()

	if (!user) {
		if (router.pathname !== '/signIn') {
			router.push('/logIn')
		}
	}

	return <>{children}</>
}