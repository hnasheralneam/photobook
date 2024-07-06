let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "public/views");


app.get("/", function(req, res) {
   res.render("index");
});

app.listen(PORT);
console.log("Server up");