import express from 'express'
import { apiUser } from '../controllers/user.controller.js';

const router = express.Router()

router.get("/", apiUser)

export default router;