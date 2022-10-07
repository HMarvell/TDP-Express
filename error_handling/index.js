const express = require("express");
const app = express();

app.get("/error", (req, res, next) => {
    const woops = new error("Oh no big woopsie");
    next (woops);
});

app.use((woops, req, res, next) => {
    console.log(woops.stack);
    next(woops);
})

app.use((woops, req, res, next) => {
    res.status(400).send(woops.message);
});

const server = app.listen(4000, () => console.log("server started"));