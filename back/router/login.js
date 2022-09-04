const express = require('express')
const router = express.Router()
const request = require('request')
const dotenv = require('dotenv')
const { google } = require('googleapis')
dotenv.config()

router.route('/').post(async (req, res, next) => {
    const code = req.body.data.code
    const scope = req.body.data.scope
    const response = await request.post({
        url: 'https://oauth2.googleapis.com/token',
        method: 'post',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
            code: code,
            client_id: process.env.GOOGLE_ID,
            client_secret: process.env.GOOGLE_PASSWORD,
            redirect_uri: process.env.GOOGLE_REDIRECT_URLS,
            grant_type: 'authorization_code',
        },
    })
    console.log(response)

    // const oauth2Client = new google.auth.OAuth2(
    //     process.env.GOOGLE_ID,
    //     process.env.GOOGLE_PASSWORD,
    //     process.env.GOOGLE_REDIRECT_URL
    // )

    // const { tokens } = await oauth2Client.getToken(code)
    // oauth2Client.setCredentials(tokens)
    // console.log(tokens)

    // res.send({ code: code })
})
module.exports = router
