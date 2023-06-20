import express from "express"
import personaRoutes from './routes/persona.routes'
//import prisma from "./prisma" // importing the prisma instance we created.

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000


app.set("port", PORT);

app.use("/api/persona", personaRoutes);

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})


//app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

export default app