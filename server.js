import express from 'express'
import router from './app.js'
import db from './config/database.js'
const app = express()
const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT || 3004;

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM "users"');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.use('/get', router)
app.use('/register', router)


app.listen(PORT, () => console.log(`Server is run on PORT: ${PORT}`));

