const EventEmitter = require("events");

const event = new EventEmitter();

//without params
event.on("sayMyName", () => {
  console.log(`Here it is!`);
});

event.on("sayMyName", () => {
  console.log(`Here it is Atul!`);
});

event.emit("sayMyName");

//With params
event.on("checkStatus", (status, message) => {
  console.log(`Status is ${status}, Message ${message}`);
});

event.emit("checkStatus", 200, "OK!");
event.emit("checkStatus", 404, "Not Found!");
