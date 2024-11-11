import { Router, Request, Response } from 'express';
import echoRoutes from "./echo"
import sumRoutes from "./sum"
import userRoutes from "./users"

const router = Router();

router.use('/', echoRoutes)
router.use('/', sumRoutes)
router.use('/', userRoutes)

// GET route to get a greeting
router.get('/hello', (req: Request, res: Response) => {
  res.json({
    msg: "Hello world!"
  });
});

export default router; 
