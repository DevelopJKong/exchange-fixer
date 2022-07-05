import express from "express";
import { excelDownload } from "../controllers/apiController";

const excelRouter = express.Router();


excelRouter.get("/",excelDownload);

export default excelRouter;