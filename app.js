import express from "express";

const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
// Set the 'views' directory for EJS templates
app.set("views", "views");

// Define a route for the home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    message: "Hello from EJS",
    people: ["John", "Jane", "Jack"],
  });
});

// Start the server
app.listen(8000, () => console.log("Server started on http://localhost:8000"));
