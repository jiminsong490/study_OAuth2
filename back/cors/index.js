const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const domains = `${process.env.WEBSITE_URL}`

const headers = {
    origin: domains,
    credentials: true,
}

module.exports = headers
