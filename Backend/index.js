import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port= process.env.PORT || 3000;
const animals = [{
    name: 'Lion',
    type: 'Mammal',
    habitat: 'Savannah'
},{
    name: 'Elephant',
    type: 'Mammal',
    habitat: 'Africa'
},{
    name: 'Tiger',
    type: 'Mammal',
    habitat: 'Africa'
},{
    name: 'Giraffe',
    type: 'Mammal',
    habitat: 'Africa'
},
{
    name: 'Cow',
    type: 'Mammal',
    habitat: 'Grassland'
},
{
    name: 'Horse',
    type: 'Mammal',
    habitat: 'Grassland'
},
{
    name: 'Dog',
    type: 'Mammal',
    habitat: 'Woodland'
}]

app.get('/api/animals', (req, res) => {
    res.send(animals);
});
 app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
 })


