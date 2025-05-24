const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World1');
})

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
