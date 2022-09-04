import React from 'react'
import axios from 'axios'
import queryString from 'query-string'

const RedirectPage = async () => {
    const location = window.location.search
    // const code = location.split('=')[1].split('&')[0]
    // const scope = location.split('&')[1].split('=')[1]
    const code = queryString.parse(location).code
    console.log(code)
    const res = await axios.post('http://localhost:3010/login', {
        data: {
            code: code,
        },
    })

    return <></>
}
export default RedirectPage
