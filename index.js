const express =require("express");
const indexRouter = require("./routes");

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.ststic("public"));

app.use("/", indexRouter);

app.use((err,req,res,next)=>{
    err=
        process.env.NODE_ENV=="production"
        ? "something went wrong...."
        : err.toSring();
    res.status(500).send(err);
});

app.listen(3000);

console.log("App running on port 3000");
