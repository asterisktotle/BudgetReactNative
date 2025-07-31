import dotenv from 'dotenv'
dotenv.configDotenv()

import express from 'express'
import cors from 'cors'

//Environments variable

const app = express();
const PORT = process.env.PORT || 3000;
 

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req,res) => {
    res.send('Hello app')
})


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:'+ PORT)
})
