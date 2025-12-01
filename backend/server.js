import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({msg: 'GET response in home directory'})
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
    //.then block is what happens when it successfully connects to mongoose
    .then(() => {

        //Listen for requests
        app.listen(process.env.PORT, () => {

            console.log(`connected to db & listening on port ${process.env.PORT}`)

        })

    })
    //Catch any errors (eg: if username or password is incorrect in env string)
    .catch((error) => {
        console.log(error)
    })
