import express from "express"
import http from "http"
import { Server } from "socket.io"
import noteRouters from "./routers/noteRouters.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import cors from "cors"

dotenv.config()
const app = express()

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173"

app.use(cors({
    origin: allowedOrigin
}))
app.use(express.json())

// Crear servidor HTTP y configurar Socket.IO
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: allowedOrigin,
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
})

// Guardar la instancia de io para usarla en noteRouters.js
app.set("io", io)

app.use("/api/notas", noteRouters)

const PORT = process.env.PORT || 3001;

connectDB()
.then(() => {
    // Usar server.listen en lugar de app.listen
    server.listen(PORT, () => {
        console.log(`Servidor levantado en puerto http://localhost:${PORT}`)
    })
})


