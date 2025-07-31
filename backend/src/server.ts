import 'dotenv/config'
import { initializeDB } from './config/db.ts';
import { app } from './app.ts';

const PORT = process.env.PORT || 3000;
 
// Initialize data base



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
