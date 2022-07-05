import express from "express";
import { home } from "../controllers/apiController";

const globalRouter = express.Router();

globalRouter.get("/",home);

export default globalRouter;