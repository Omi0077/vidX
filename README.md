#  vidX – Online MP4 Video Link Extractor

**vidX** is a browser-based tool that extracts direct `.mp4` video URLs from websites using network sniffing via Puppeteer.

It is built for users who want to generate **direct download links** for videos served through `.mp4` requests (as seen in browser network activity).

---

##  What It Does ?

- 🕵️ Scans the target page like a real browser (headless)
- 🔎 Looks for `.mp4` requests made during page load
- 📥 Returns a **direct downloadable link** if found
- 🚫 Does **not** download the video on the server — just gives the link

---

## ✅ Supported

- Sites that serve videos via `.mp4` files in network requests (visible in browser DevTools > Network)
- Pages where the video loads after a short delay or via JS

---

## ❌ Not Supported (Currently)

- HLS streams (`.m3u8`)
- DASH / MPEG-DASH (`.mpd`)
- DRM-protected content
- Blob URLs
- YouTube and platforms with heavily obfuscated video loading

---

##  How It Works

1. You paste a URL (e.g., `https://somevideo.com/watch/abc`)
2. The server launches a headless browser and visits the page
3. It watches all network requests for any `.mp4` files
4. Once a match is found, it stops and returns the link

---


## ⚠️ Disclaimer

This tool is intended **strictly for educational and learning purposes**. By using this project, you agree to the following:

- You are **solely responsible** for any action taken with this tool.
- **Do not** use this tool to access, download, or distribute copyrighted content without proper authorization.
- Accessing or interacting with media content without permission may violate the **terms of service** of the target website and may be illegal in your country.
- This project does **not promote or support piracy**, scraping of protected content, or any other form of unethical behavior.
- The authors and contributors of this project **are not liable** for any misuse or damages resulting from its use.

Use responsibly.

---