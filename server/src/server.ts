import express from 'express';

const port = 3333;
const app = express();

app.get('/ads', (request, response) => {
    console.log("Em Anúncios");
    return response.json([
        { id: 1, name: "Anuncio 1" },
        { id: 2, name: "Anuncio 2" },
        { id: 3, name: "Anuncio 3" }
    ])
});

app.listen(port, () => {
    console.log("Server online on port ", port);
});