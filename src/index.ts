import { Request, Response } from 'express';
import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req: Request,res: Response)=>{
    res.send('Hello Sif with Typescript')
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})