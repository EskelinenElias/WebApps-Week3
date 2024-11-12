import express, {Express, Request, Response} from "express"
import path from "path"
import router from "./routes"
import morgan from "morgan"


const app: Express = express()

// Add middleware
app.use(express.json())
app.use(morgan("dev"))

// Add routes
app.use('/', router)

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')))

// Type for users
type TUser = {
  name: string; 
  email: string; 
}

// List for storing users
const users: TUser[] = [];

export default app; 
export { TUser, users }; 
