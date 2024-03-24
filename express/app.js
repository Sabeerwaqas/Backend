const express = require("express");

const app = express();

// Assign a port

const PORT = 3000;

// Get Method

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of server.");
});

// Another GET method

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello World!<h1/>");
});

/*

    Note:

        The send() method takes a string, object, array or buffer as an 
        argument and is used to send the data object back to the client
        as an HTTP response, also there are lots of types of response in
        express like res.json() which is used to send the JSON object, 
        res.sendFile() which is used to send a file etc.

*/

// POST method

/*

    Note:

        We are using two middleware,

        1) express.json() which is used to parses the incoming request object
        as a JSON object. 

        2) The app.use() is the syntax to use any middleware.
 
*/

app.use(express.json());
app.post("/sendName", (req, res)=>{
    const {name} = req.body;
    res.send( `Welcome ${name}`);
})

// Listen app on assigned port

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is successfully running, and app is currently running on port ${PORT}`
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
