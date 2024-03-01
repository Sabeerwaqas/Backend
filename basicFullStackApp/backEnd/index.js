import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 5000;

// get a list of dummy data

app.get("/api/dummyData", (req, res) => {
  const data = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "David",
    },
    {
      id: 3,
      name: "Stephen",
    },
    {
      id: 4,
      name: "Justine",
    },
  ];
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`);
});
