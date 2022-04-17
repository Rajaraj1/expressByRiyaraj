const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

//Template Engine
const templatePath = path.join(__dirname, "../template");
app.set("view engine", "hbs");
app.set("views", templatePath);

// builtin middleware
// const staticPath = path.join(__dirname, "./public");
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  //   res.write("<h1>This is Raja raj</h1>");
  //   res.write("<h1>This is Raja raj</h1>");
  //   res.send();
  //   res.json([
  //     {
  //       id: 1,
  //       Name: "Raja raj",
  //     },
  //     {
  //       id: 2,
  //       Name: "Riya raj",
  //     },
  //     {
  //       id: 3,
  //       Name: "Pari raj",
  //     },
  //   ]);
  res.render("index", {
    Name: "Raja raj",
    Crush: "Riya raj",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
