const express = require("express"); //Express module
const path = require("path"); //Path module for file paths
const app = express(); //Express instance

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); //serves index.html as root URL
});

app.post("/login", (req, res) => { //handles form submission from login page
  const email = req.body.email;
  const password = req.body.password;

  //Input Verification
  if (email == "" || password == ""){
    res.send("Fields cannot be empty");
  } 
  else if (!email.includes("@")){
    res.send("Invalid email");
  } 
  else if (password.length < 8){
    res.send("Password must be at least 8 characters");
  } 
  else {
    res.sendFile(path.join(__dirname, "success.html"));
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));