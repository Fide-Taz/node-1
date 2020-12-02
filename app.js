const express = require("express");

/* setup express app */

const app = express();

/* register ejs */
app.set("view engine", "ejs");

/* listen for requests */
app.listen(3000);

/* respond */
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "the crazy dev",
      pass: "it wasnt easy and it was a lonely journey",
    },
    {
      title: "the crazy dev",
      pass: "it wasnt easy and it was a lonely journey",
    },
  ];
  res.render("index", { title: "blog", blogs });
});

/* respond with a file */
app.get("/about", (req, res) => {
  res.render("about", { title: "blog" });
});
/* respond with a file */
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "blog" });
});

/* redirects */
app.get("/about-me", (req, res) => {
  res.redirect("./about");
});

/* 404 error */
app.use((req, res) => {
  res.status(404).render("404");
});
