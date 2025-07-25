import { check, validationResult } from "express-validator";
import { downloadVideo } from "../services/downloader.js";
import { request } from "undici";
import { sendMail } from "../services/mailSender.js";

export function getHomePage(req, res, next) {
  res.render("client/index", {
    errors: [],
  });
}

export function getDownloaderPage(req, res, next) {
  res.render("client/downloader", {
    errors: [],
  });
}

export function getContactPage(req, res, next) {
  res.render("client/contact");
}

export const postStart = [
  check("videoLink").isURL().withMessage("Please Enter a valid URL of video"),

  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array().map((err) => err.msg),
      });
    }
    // console.log(req.body);
    const videoLink = req.body.videoLink;
    // console.log(videoLink);
    const urlToVideo = await downloadVideo(videoLink);
    console.log(urlToVideo);
    res.json({ urlToVideo });
  },
];

export async function getStartDownload(req, res, next) {
  const urlToVideo = req.query.url;
  if (!urlToVideo) {
    return res.status(400).send("something went wrong!");
  }

  try {
    const response = await request(urlToVideo);
    // set headers to force download
    res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
    res.setHeader("Content-Type", "video/mp4");

    response.body.pipe(res);
  } catch (error) {
    console.error(error);
  }
}

export const postSendMail = [
  check("userEmail").isEmail().withMessage("Please Enter a valid Email address"),
  check("subject")
    .isLength({ min: 2, max: 50 })
    .withMessage("subject should be between 2 to 50 chars of length"),
  check("message")
    .isLength({ min: 5, max: 500 })
    .withMessage("messgae should be between 5 to 500 chars of length"),
  async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(422).json({
        errors: errors.array().map(err => err.msg)
      })
    }
    // console.log(req.body);
    const {userEmail, subject, message} = req.body
    await sendMail(userEmail, subject, message)
  }
];
