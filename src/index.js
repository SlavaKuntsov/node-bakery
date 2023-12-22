import express from 'express'

import Item from '../src/controllers/Item.js'

const PORT = process.env.PORT || 9999

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
	res.header('Access-Control-Allow-Origin', 'https://bakery-backend-9dyd.onrender.com')
	res.setHeader('Access-Control-Allow-Origin', 'https://beloruskyismak.vercel.app');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

// app.get('/user', User.create)
app.get('/catalogItems', Item.getCategory)
app.get('/item', Item.findById)
app.get('/create', Item.createTable)
app.get('/add', Item.add)

app.listen(PORT, () => {
	console.log(`server start on http://localhost:${PORT}`)
})
