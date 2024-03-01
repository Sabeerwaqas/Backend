import express from "express";

const app = express();

const PORT = process.env.PORT || 3050;

// app.get("/", (req, res)=>{
//     res.send("Server is ready");
// })

// get a list of dummy data

app.get('/dummyData', (req, res)=>{
    const data = [
        {
            id:1,
            name:"John"
        },
        {
            id:2,
            name:"David"
        },
        {
            id:3,
            name:"Stephen"
        },
        {
            id:4,
            name:"Justine"
        }
    ]
    res.send(data);
})

app.listen(PORT, ()=>{
    console.log(`Serving at http://localhost:${PORT}`);
})

