const express = require("express");
const { loggerMiddleware } = require("./middlewares/logger");
const booksRouter = require("./router/routes");
const app = express();
const PORT = 3000;

//Middlewares
//middleware to extract request body in json
app.use(express.json());
//custom middlewares
app.use(loggerMiddleware);

//Routers
app.use("/books", booksRouter);

app.listen(PORT, console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - LISTENING ON 3000"));
