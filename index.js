import express from "express";

const app = express();

const PORT = 3004;

app.listen(PORT, (req, res)=>{
console.log(`Server is running on port ${PORT}`)
})