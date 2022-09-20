const user = require("./routes/userRoutes")
const express = require("express")
const app = express()
const cors = require("cors")


app.use(cors())

app.use(express.json())


app.use("/test", user)

// http://localhost:5000/test/updateUser
// http://localhost:5000/test/getusers
// http://localhost:5000/test/getuser/test


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})