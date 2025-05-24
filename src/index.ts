import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola SENATI');
})

const port = 4000;
app.listen(4000, () => {
    console.log('Servidor rodando on port', port);
});
