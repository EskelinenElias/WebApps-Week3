import { Router, Request, Response } from 'express';

const router = Router();

// Type for users
type TUser = {
  name: string; 
  email: string; 
}

// List for storing users
const users: TUser[] = [];

// POST route to add new user
router.post('/users', (req: Request, res: Response) => {
  // Parse the request
  const name = req.body.name;
  const email = req.body.email;
  // Create new user and add to the list
  const newUser: TUser = { name, email };
  users.push(newUser);
  // Send the response
  res.json({ message: 'User successfully added' });
});

// GET route to fetch all users
router.get('/users', (req: Request, res: Response) => {
  // Send the response
  res.status(201).json({ users: users });
});

export default router; 
