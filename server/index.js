const http = require("http");
const FileSystem = require("fs");

const server = http.createServer((req, res) => {
  //this run whenever any request is received

  const log = `[${Date.now()}] : ${req.method} : ${req.url},\n`;
  FileSystem.appendFileSync("server/log.txt", log, "utf-8");

  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("HELLO !");
      return;
    case "/contact-us":
      res.writeHead(200);
      res.end("contact info");
      return;
    case "/tweet":
      if (req.method === "GET") {
        res.writeHead(200);
        res.end("200 tweets received.");
        return;
      } else if (req.method === "POST") {
        res.writeHead(200);
        res.end("Tweets posted successfully.");
        return;
      }
      res.writeHead(405);
      res.end("Method not allowed");
      return;
    default:
      res.writeHead(404);
      res.end("Didn't found what you were looking for ?.");
      return;
  }
});

server.listen(3000, () => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - SERVER LISTENING ON PORT 3000");
});
