import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
dotenv.config();
const app = express()
app.use(cors())
const port= process.env.PORT || 3000;

app.get('/api/animals', (req, res) => {
    res.send(fs.readFileSync('./MOCK_DATA.json', 'UTF-8'));
});
 app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
 })


