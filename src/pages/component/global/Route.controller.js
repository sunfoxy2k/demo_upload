import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

function checkNeedToLogin(path, isLogin) {
  const isProtectedRoute = path.includes('/app')

  return isProtectedRoute && !!!(isLogin)
}

function checkNeedToApp(path, isLogin) {
  const isLandingPage = path == '/' || path == ''
  return isLandingPage && isLogin
}

const AuthRouteController = () => {
  const router = useRouter()
  const path = router.pathname
  const isLogin = useSelector(state => state.auth.isLogin)

  useEffect(() => {
    if (checkNeedToApp(path, isLogin)) {
      router.replace('/app')
    }

    if (checkNeedToLogin(path, isLogin)) {
      router.push({
        pathname :'/login',
      })
    }

    if (path == '/login' && isLogin) {
      router.push('/app')
    }
    
  }, [path, isLogin])
}



export default AuthRouteController