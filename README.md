# vidX

vidX is a simple web app that extracts direct download links for videos by sniffing `.mp4` requests from the network, using headless browser automation.

🔗 Live URL: [https://vidx.onrender.com](https://vidx.onrender.com)

## Features

- Input any video page URL.
- vidX uses Puppeteer to visit the page and find direct `.mp4` file requests.
- Generates a downloadable video link if found.
- Lightweight front-end using EJS and Tailwind CSS.
- Auto HTTPS via Render.

## How it Works

1. You enter the URL of a video page.
2. vidX opens the page in a headless browser.
3. It listens for network requests and finds any URL ending in `.mp4`.
4. The direct video URL is returned to the user.
5. The frontend shows the download link, which streams the video through the backend.

## Technologies Used

- Node.js
- Express.js
- Puppeteer
- EJS Templates
- Tailwind CSS
- Undici (for proxy downloading)

---

## ⚠️ Disclaimer

This tool is intended for **educational and research purposes only**.

- Do **not** use it to download copyrighted content without permission.
- The author does **not** host or store any video files.
- vidX merely automates what a user could manually inspect in the browser’s Developer Tools → Network tab.
- Users are fully responsible for how they use this tool.

---

## License

MIT License © om
