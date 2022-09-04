import React from 'react'
import GOOGLE_AUTH_URL from '../../config/OAuthConfig'
const LoginPage = () => {
    const handleClick = async (e) => {
        window.location.href = GOOGLE_AUTH_URL
    }

    return (
        <>
            <h1>Login</h1>

            <button onClick={handleClick}>구글 로그인</button>
        </>
    )
}

export default LoginPage
