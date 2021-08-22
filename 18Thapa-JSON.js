const fs = require("fs");

var bioData = {
  name: "Athul C",
  age: 24,
  location: "Bekal",
};

//1. Convert bioData to JSON
var jsonBioData = JSON.stringify(bioData, null, 2);
// console.log(jsonBioData);

//2. Add the JSON into a file json.txt
fs.writeFile("json.txt", jsonBioData, (err) => {
  if (err) {
    throw err;
  }

  console.log("Json written in file!");
});

//3. Read the file
var fileData = fs.readFileSync("json.txt", "utf-8");
// console.log(fileData);

//4. Convert back to object
var parsedData = JSON.parse(fileData);
// console.log(parsedData);

//5. Rename file extension to json
fs.rename("json.txt", "jsonNew.json", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});
