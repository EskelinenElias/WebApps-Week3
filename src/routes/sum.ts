import { Router, Request, Response } from 'express';

const router = Router();

// POST route to calculate the sum of numbers
router.post('/sum', (req: Request, res: Response) => {
  // Parse the request
  const numbers: number[] = req.body.numbers
  // Calculate the sum 
  const sum: number = numbers.reduce((acc, num) => acc + num, 0) 
  // Send response
  res.json({ sum:sum })
});

export default router; 
