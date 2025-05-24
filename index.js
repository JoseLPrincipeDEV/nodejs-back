const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenidos a SENATI');
})

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
