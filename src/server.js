import express from 'express';
const app = express();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('API com TypeScript funcionando!');
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map