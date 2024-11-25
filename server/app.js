import express from 'express'
import path from 'path'
import { readFileSync } from 'node:fs';

const app = express()
const port = 8000
const ROOT_DIR = path.dirname(import.meta.dirname)
const users = JSON.parse(readFileSync(path.join(ROOT_DIR, 'server', 'users.json'), 'utf8'));


app.use('/static', express.static(path.join(ROOT_DIR, 'public')))

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.sendFile(path.join(ROOT_DIR, 'public/default.html'))
})

app.get('/cors', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'https://example.com')
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({status: 'OK'})
})

app.get('/image', (req, res) => {
    res.sendStatus(200)
})

app.post('/analytics', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(`${req.path}: ${JSON.stringify(req.query)}`)
    res.sendStatus(200)
})

app.get('/with_cookies', (req, res) => {
    res.cookie('role', 'student', {path: '/'});
    res.cookie('auth', '123', {path: '/', maxAge: 1000 * 60 * 60 * 1000, httpOnly: true});
    res.send(`
<h1>Сервер установит следующие куки:</h1>
<h3>Set-Cookie: role=student;path=/;</h3>
<h3>Set-Cookie: auth=123;path=/;max-age=3600000000;HttpOnly;</h3>
`
    )
})

app.get('/local_storage', (req, res) => {
    const response =
        `
<h2>localStorage.setItem()</h2>
<h2>localStorage.getItem()</h2>
<h2>localStorage.removeItem()</h2>
<h2>localStorage.clear()</h2>
<h2>localStorage.length</h2>
`
    res.send(response)
})

app.get('/hello_world', (req, res) => {
    res.send('Hello World!')
})

app.get('/iframe_with_json', (req, res) => {
    res.send(users)
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/status500', (req, res) => {
    res.sendStatus(500)
})

app.post('/registration', (req, res) => {
    res.send({status: 'OK'})
})

app.get('/slow', (req, res) => {
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        console.log(`${req.path}: ${JSON.stringify(req.query)}`)
        res.json('OK')
    }, 5000)
})

app.get('/analytics/slow', (req, res) => {
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        console.log(`${req.path}: ${JSON.stringify(req.query)}`)
        res.json('OK')
    }, 3000)
})

app.post('/analytics/slow', (req, res) => {
    setTimeout(() => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        console.log(`${req.path}: ${JSON.stringify(req.query)}`)
        res.json('OK')
    }, 3000)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

