import express from "express";
import {
  getContactPage,
  getDownloaderPage,
  getHomePage,
  getStartDownload,
  postSendMail,
  postStart,
} from "../controller/clientController.js";

const clientRouter = express.Router();

clientRouter.get("/", getHomePage);
clientRouter.get("/downloader", getDownloaderPage);
clientRouter.get("/contact-us", getContactPage);
clientRouter.get("/download", getStartDownload);

clientRouter.post("/start", postStart);
clientRouter.post("/send-mail", postSendMail);

export default clientRouter;
