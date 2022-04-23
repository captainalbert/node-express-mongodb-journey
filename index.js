const fs = require("fs");

// BLOCKING / SYNCHRONOUS
// const text = fs.readFileSync("./txt/input.txt", "utf-8");
// const newText = `Some avodado description: ${text}`;
// fs.writeFileSync("./txt/output.txt", newText);
// console.log("New file has been created. \nFile name: output.txt");

// NON-BLOCKING / ASYNCRHONOUS
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR: ", err);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      const second = data2;
      const third = data3;
      fs.writeFile(
        "./txt/final.txt",
        `Some Avocado description.:\n${second}\n${third}`,
        "utf-8",
        () => {
          console.log("Check the 'final.txt' file.");
        }
      );
    });
  });
});
