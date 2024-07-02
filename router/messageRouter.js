import express from "express";
import {
    //getAllMessages,
    sendMessage,
  } from "../controller/messageController.js";


const router = express.Router();
router.post("/send", sendMessage);


export default router;