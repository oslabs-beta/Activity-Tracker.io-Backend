import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import dataController from "../controllers/dataController";
import authMiddleware from "../middleware/auth";


router.get("/",authMiddleware, dataController.getAllUserData,(req: Request, res: Response) => {});
router.get("/referral",authMiddleware, dataController.getAllreferralData,(req: Request, res: Response) => {});
router.delete("/delete-website",authMiddleware, dataController.deleteWebsite,(req: Request, res: Response) => {});
//router.get("/:id",authMiddleware, dataController.getWebsiteData,(req: Request, res: Response) => {}); 

export default router;