import express from 'express'
import dotenv from 'dotenv'
import db from './models/index.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app =  express()


app.use(express.json())
app.use (cookieParser());
 
app.use('/product',productRoute)
app.use('/user',userRoute)



const port = process.env.PORT 
app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await db.sequelize.sync();
        console.log('Database synced!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})