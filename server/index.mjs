import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
const PORT=3000
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(PORT, () =>
    // console.log(PORT),
    
    console.log(`Server listening on port ${PORT}!`),
);
