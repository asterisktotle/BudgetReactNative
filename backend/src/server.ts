import dotenv from 'dotenv'
dotenv.configDotenv()

import express from 'express'
import cors from 'cors'
import { initializeDB } from './config/db.ts';


//Environments variable

const app = express();
const PORT = process.env.PORT || 3000;
 
// Initialize data base


// Middleware
app.use(cors())
app.use(express.json())

// Routes




// Start server with database
const startServer = async () => {
    try{
        await initializeDB()

        app.listen(PORT, () => {
            console.log('Server is running at http://localhost:'+ PORT)
        })


    }catch(error){
        console.error('Failed to start server: ', error)
        process.exit(1)
    }
}


startServer()
