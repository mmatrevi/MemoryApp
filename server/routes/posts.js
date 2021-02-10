import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

//Initializing router
const Router = express.Router();

//Routes
Router.get("/", getPosts);

Router.post("/", createPost);

//exporting router for use elsewhere
export default Router;
