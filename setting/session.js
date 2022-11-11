const session = require('express-session');
const express = require('express')

const app = express()


/**
 * 세션 선언
 * How to use?
 * require("./setting/session")
 */
module.exports = () => {
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser(process.env.COOKIE_SECRET));
    const sessionMiddleware = session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
    app.use(sessionMiddleware)
}