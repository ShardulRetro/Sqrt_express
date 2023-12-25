const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/find",(req,res) =>{
	let num = req.query.number;
	let n = parseFloat(num);
	let ans = n**0.5;
	ans = ans.toFixed(2);
	let msg =  "SquareRoot = "+ans;
	res.json({"msg":msg});



});

app.listen(9000,() =>{console.log("Server ready @9000")});