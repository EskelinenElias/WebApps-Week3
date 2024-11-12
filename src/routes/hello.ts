import { Router, Request, Response } from 'express';

const router = Router();

// GET route to get a greeting
router.get('/hello', (req: Request, res: Response) => {
  res.json({
    msg: "Hello world!"
  });
});

export default router; 
