import { Router } from "express";
import { getAllsongs } from "../controllers/song.controller.js";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router()

router.get('/',protectedRoute,requireAdmin,getAllsongs)
router.get("/featured",getFeaturedSongs)


export default router