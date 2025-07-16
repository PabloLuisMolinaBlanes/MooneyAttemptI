import express from 'express'
import cors from 'cors'
import {readAllMovements} from './services/crud'

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', // Change URL here to your own domain, if deploying this server
    optionsSuccessStatus: 200
}
const port = 3000

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/movements", async (req, res) => {
    res.send(await readAllMovements());
})

app.listen(port, () => {
    console.log(`Mooney backend server is now listening in port ${port}`)
})