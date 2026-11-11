import express from "express"
import noteRouters from "./routers/noteRouters.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import cors from "cors"

dotenv.config()
const app = express()
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())

app.use("/api/notas", noteRouters)

const PORT = process.env.PORT

console.log(process.env.PORT) || 3001

connectDB()
.then(() => {
    
    app.listen(PORT, () => {
        console.log(`Servidor leventado en purto http://localhost:${PORT}`)
    })
})


