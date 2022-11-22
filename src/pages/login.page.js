import Loading from '@/modules/UI_Component/Loading'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { login } from '@/store/auth.reducer'

const LoginPage = () => {
  const dispatch = useDispatch()

  function loginHandler(user) {
    if (user && user.username) {
      const loginAction = login({
        userName : user.username,
      })
      dispatch(loginAction)
    }
  }

  function loginErrorHandler(e) {
    console.error('Unexpected Error')
    console.error(e)
  }

  useEffect(() => {
    Auth.currentUserInfo()
      .then(loginHandler)
      .catch(loginErrorHandler)
  }, [])

  return (
    <Loading />
  )
}

export default withAuthenticator(LoginPage)