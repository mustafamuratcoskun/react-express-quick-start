const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Washing Machine", price: 10000 },
    { id: 3, name: "Bag", price: 20 }
  ]);
});

app.listen(PORT, () => {
  console.log("Backend Running");
});
