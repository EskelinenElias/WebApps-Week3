import { Router, Request, Response } from 'express';

const router = Router();

// GET route to echo id
router.get('/echo/:id', (req: Request, res: Response) => {
  // Parse the request
  const id: string = req.params.id
  // Send the response
  res.json({ id: id })
})

export default router; 
