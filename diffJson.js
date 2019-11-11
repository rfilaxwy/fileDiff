const fs = require("fs");

const fileReader = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("File not found");
      console.log(data);
      resolve(data);
    });
  });
};
const fileInSync = fs.readFileSync("./file1.json", "utf-8", (err, data) => {
  if (err) reject("Couldnt find file");
  resolve(data);
});
console.log(fileInSync);

// const filesIn = async (file1, file2) => {
//   const file1In = await JSON.stringify(fileReader(file1));
//   const file2In = await JSON.stringify(fileReader(file2));
//   //Do some comparison here once data for files is retruned.

//   let equality = file1In === file2In ? true : false;
//   if (equality) return true;
//   return false;
// };

// // fileReader("./file1.json").then(data => console.log(data));
// filesIn("./file1.json", "./file2.json").then(data => console.log(data));
