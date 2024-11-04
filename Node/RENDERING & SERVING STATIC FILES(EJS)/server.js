const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;

// serve the static files/folder

app.use(express.static(path.join(__dirname, "public")));

// Set the view engine as ejs
app.set("view engine", "ejs");

// Render Home page/route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Render About page/route
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Render contact page/route
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Render gallery page/route
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

// Render UserData page/route
app.get("/user", (req, res) => {
  // dummy user content
  const userData = {
    username: "sonu",
    age: 25,
    ispremiunm: false,
    email: "sonugmail.com",
  };

  res.render("userData.ejs", userData);
});

//!Start the Server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
