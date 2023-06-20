// import express from 'express'
// import prisma from "./prisma" // ESModules
// // const express = require('express') -> commonjs

// //import diaryRouter from './routes/diaries'

// const app = express()
// app.use(express.json()) // middleware que transforma la req.body a un json

// const PORT = 3000

// // app.get('/ping', (_req, res) => {
// //   console.log('someone pinged here!!')
// //   res.send('pong')
// // })

// //app.use('/api/diaries', diaryRouter)

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


import app from "./app";

app.listen(app.get("port"));

console.log("Server on port", app.get("port"));