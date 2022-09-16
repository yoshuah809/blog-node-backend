import express, { response } from "express";

const app = express();

//hello

app.post("/hello", (req, res) => {
	res.send("Hello!");
});

app.listen(8000, () => {
	console.log("Server is listening on port 8000");
});
