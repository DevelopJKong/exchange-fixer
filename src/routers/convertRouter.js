import express from "express";
import { fromToConverter } from "../controllers/apiController";

const convertRouter = express.Router();

convertRouter.get("/from",fromToConverter);


export default convertRouter;