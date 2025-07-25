import puppeteer from "puppeteer";

export async function downloadVideo(url) {
  if (!url) {
    throw new Error("URL not provided");
  }
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  let videoUrl = null;

  // intercept network reqs
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    req.continue(); // allow reqs to go through
  });

  page.on("response", async (res) => {
    const contentType = res.headers()["content-type"];
    const resURL = res.url();

    if (
      (contentType &&
        contentType.startsWith("video") &&
        resURL.startsWith("http")) ||
        resURL.endsWith(".mp4")
    ) {
      console.log("found video url", resURL);
      videoUrl = resURL;
    }
  });

  console.log("navigating to url:", url);
  await page.goto(url, { waitUntil: "networkidle2" });
  //giving page time to load vids
  //   await page.waitForTimeout(5000);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await browser.close();

  if (!videoUrl) {
    throw new Error("no video url found in link");
  }

  return videoUrl;
}
