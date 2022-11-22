import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { logout, reset as resetJWT } from "@/store/auth.reducer";
import { Auth } from "aws-amplify";
import { setup as setJWT } from "@/store/auth.reducer";

const JWTController = () => {
    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch()

    function authErrorHandler () {
        alert('Server Authentication Error');
        dispatch(logout())
    }

    useEffect(() => {
        if (isLogin) {
            Auth.currentSession()
            .then(session => session.accessToken.jwtToken)
            .then(jwt => dispatch(setJWT(jwt)))
            .catch(authErrorHandler)
        } else {
            dispatch(resetJWT())
        }
    }, [isLogin])
}

export default JWTController;