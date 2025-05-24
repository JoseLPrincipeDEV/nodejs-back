import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola SENAT');
})

export default app;