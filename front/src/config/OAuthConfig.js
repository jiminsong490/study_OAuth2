const google_scope =
    'https://www.googleapis.com/auth/userinfo.email ' +
    'https://www.googleapis.com/auth/userinfo.profile'

const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_ID}&redirect_uri=http://localhost:3000/google/callback&response_type=code&scope=${google_scope}`

export default GOOGLE_AUTH_URL
