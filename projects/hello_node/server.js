const express = require("express")
const app = express()
const port = 14
const auto = [
    { name: "Dodge", brand: "Challenger", country: "USA", id: 1},
    { name: "Nissan", brand: "Skyline", country: "Japan", id: 2},
    { name: "BMW", brand: "M5 E60", country: "Germany", id: 3 },
    {name: "Toyota", brand: "Supra", country: "Japan", id: 4}
]

app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(auto))
})

app.listen(port, () => {
    console.log(`Японцы делают лучшие машины! ${port}`)
})