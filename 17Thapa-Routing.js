const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("jsonNew.json", "utf-8");

  if (req.url == "/") {
    res.end("Home");
  } else if (req.url == "/1") {
    res.end("Done!");
  } else if (req.url == "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    //1st method

    // res.statusCode = 404;
    // res.setHeader("Content-type", "text/html");

    //2nd method

    res.writeHead(200, "Success here", { "Content-type": "text/html" });
    res.end("<h1>404</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => console.log("Running at 8000"));
