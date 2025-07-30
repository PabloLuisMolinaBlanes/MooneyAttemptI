import express from 'express'
import cors from 'cors'
import {readAllMovements, createMovement, readAllMovementsForPython} from './services/crud'
import { AxiosResponse } from 'axios'

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173', // Change URL here to your own domain, if deploying this server
    optionsSuccessStatus: 200
}
const axios = require("axios")
const port = 3000

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/movements", async (req, res) => {
    res.send(await readAllMovements());
})
app.post("/sendMovement", async(req,res) => {
    console.log(req.body.label.id)
    const movementSent = req.body
    res.send(await createMovement(movementSent))
})

app.get("/utils/statistics", async (req, res) => {
    const movementsToSend = await readAllMovementsForPython()
    axios.post("http://localhost:5000/utils/statistics", movementsToSend).then((response : AxiosResponse) => {
        res.setHeader('content-type', 'text/plain')
        res.send(response.data)
    })
})

app.listen(port, () => {
    console.log(`SolPF backend server is now listening in port ${port}`)
})