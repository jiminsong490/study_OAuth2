import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MainPage = () => {
    const a = async () => {
        const code = { a: 'sdfs' }
        const res = await axios.post('http://localhost:3010/login', {
            data: {
                code: code,
            },
        })
        console.log(code)
    }
    return (
        <>
            <Link to={'/login'}>로그인</Link>
            <button onClick={a}></button>
        </>
    )
}

export default MainPage
