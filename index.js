const express =require("express");
const app = express();

app.get("/:name/:lastName", function (req, res)
{
    //DB logic
    console.log({req});
    const {name, lastName}=req.params;
    res.send("Hello world from" + name + lastName);
});

app.post("/post", function (req, response)
{
    //logic (DB/ file/ memory) MongoDB
    response.send("Task added successfully");
});

app.delete("/", function (req, res)
{
    //logic
    res.send("Delete request is called");
});

app.listen(3000);

console.log("App running on port 3000");