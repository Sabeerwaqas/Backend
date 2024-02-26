require('dotenv').config()
// import * as fs from 'node:fs';
// const app = express();

// const PORT = 3004;

// app.listen(PORT, (req, res)=>{
// console.log(`Server is running on port ${PORT}`)
// })

// Synchronously reading file

// const syncT1=performance.now()
// const txt = fs.readFileSync("./dummyData.txt", "utf-8");
// console.log(txt);
// const syncT2 = performance.now();

// console.log(syncT2-syncT1)

// Asynchronously reading file

// const t1 = performance.now();

// fs.readFile('./dummyData.txt', 'utf-8', (error, asyncData)=>{
// console.log(asyncData)
// })

// const t2 = performance.now();
// console.log("Executed result")
// console.log(t2-t1);

// console.log("Sync=> ", syncT2-syncT1);
// console.log("Async=> ",t2-t1);

// const http = require("http");

// const data = {name: "Sabeer"};

// const server = http.createServer((req, res) => {
//   console.log("Hello world");
// console.log(req.url)
// Create header

//   res.setHeader('DummyHeader', "DummyValue");
//   res.setHeader('Content-Type', 'application/json')

//   res.end(JSON.stringify(data));
// });

// server.listen(8080);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req, res)=>{
  res.send("Welcome")
})

app.get('/login', (req, res)=>{
  res.send("<h1>This is login page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
