import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3330; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({});
});


app.get("/artikli", (req, res) => {
    let artikli = storage.artikl
    res.json(artikli)
});

app.get("/pocetna", (req, res) => {
    let pocetna = storage.pocetna
    res.json(pocetna)
});


// lista svih korisnika - nije baš nešto što će ti trebati (jedino za neku administraciju)
// app.get('/users', (req, res) => {
//     res.json(storage.user);
// });

// app.get('/artikli', (req, res) => { // sa upitnikom dodajemo nove neke filtere, parametre, ...
//     let parametri = req.query;

//     res.json(storage.artikl.filter((x) => (x.boja == parametri.boja && x.naziv == parametri.naziv))); // mongo upit
// });

//lista narudžbi
app.get('/orders', (req, res) => {
    res.json(storage.orders);
});

//unos nove narudžbe
app.post('/orders', (req, res) => {
    res.statusCode = 201;
    res.setHeader('Location', '/orders/1526');
    res.send();
});

//dohvat pojedinog artikla preko id-a
app.get('/artikli/:id', (req, res) => {
    let id = req.params.id;
    res.json(storage.artikl.filter((x) => (x.id == id.id)));
});



app.put('/artikli', (req, res) => {
    res.json({ status: 'Radiii' });
});

//dohvaćanje samo rose vina - anti-pattern!!
// app.get('/artikli/:atribut/:vrijednost', (req,res) =>{
//     let atribut = req.params.atribut;
//     let vrijednost = req.params.vrijednost;
//     res.json(storage.artikl.filter((x) => x[atribut] == vrijednost)); // mongo upitom
// });

app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));