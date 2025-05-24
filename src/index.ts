import server from './server';

const port = 4000;
server.listen(4000, () => {
    console.log('Servidor rodando on port', port);
});
