import express, {Express, Request, Response} from "express"
import path from "path"
import router from "./routes"

const app: Express = express()

// Add middleware
app.use(express.json())

// Add routes
app.use('/', router)

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')))

export default app;
