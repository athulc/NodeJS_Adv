const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //1st way
  //   fs.readFile("json.txt", "utf-8", (err, data) => {
  //     if (err) console.error(err);
  //     res.write(data);
  //     res.end();
  //   });

  //2nd way
  const rstream = fs.createReadStream("json.txt2");

  rstream.on("data", (chunk) => {
    res.write(chunk);
  });

  rstream.on("error", (err) => {
    console.log(err);
    res.end("Something went wrong!");
  });

  rstream.on("end", () => {
    res.write("End Streaming...");
    res.end();
  });
});

server.listen(8000, "127.0.0.1", () => console.log("Server On!"));
