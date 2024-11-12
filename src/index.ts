import app from "./app"

// Configure server settings
const host: string = "127.0.0.1"
const port: number = 3000

// Start the server
app.listen(port, () => { 
  console.log(`Server running at http://${host}:${port}/`)
})

// Type for users
type TUser = {
  name: string; 
  email: string; 
}

// List for storing users
const users: TUser[] = [];