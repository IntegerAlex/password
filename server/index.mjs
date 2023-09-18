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

app.post('/save', (req, res) => {
    console.log(req.body);
    const { site , username , password } = req.body;
    if (site && username && password) {
        res.send('POST request to the homepage');
    }
    res.send(' request to the homepage');
    });

app.listen(PORT, () =>
    // console.log(PORT),

    console.log(`Server listening on port ${PORT}!`),
);
