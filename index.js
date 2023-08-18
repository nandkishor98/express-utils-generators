const express =require("express");
const indexRouter = require("./routes");

const app = express();

app.use(express.json());
app.use("/", indexRouter);

app.listen(3000);

console.log("App running on port 3000");