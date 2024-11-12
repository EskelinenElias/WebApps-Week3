import { Router, Request, Response } from 'express';
import helloRoutes from "./hello"
import echoRoutes from "./echo"
import sumRoutes from "./sum"
import userRoutes from "./users"

const router = Router();

router.use('/', helloRoutes)
router.use('/', echoRoutes)
router.use('/', sumRoutes)
router.use('/', userRoutes)

export default router; 
