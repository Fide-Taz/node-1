const fs = require("fs");

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted ");
  });
}

/* 
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created ");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder removed ");
  });
} */
/*  

fs.write('./file/blog.txt', 'hello world', () =>{
    console.log('file was written');
    
}) */
/* 
fs.readFile('./file/blog.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
    
}) */
