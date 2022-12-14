const express = require("express");
const errorMiddleware = require("./middleware/error");
const userRouter = require("./routes/user");
const books = require("./routes/books");

const app = express();

app.use("/api/user", userRouter);
app.use("/api/books", books);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
