import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';
import mongo from "mongodb"
import connect from "./db.js"


const app = express(); // instanciranje aplikacije
const port = 3330; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({});
// });

//dohvat samo jednog elementa preko njegovog id-a preko monga, neće mi trebati ali neka stoji tu
// app.get('/posts/:id', async (req, res) => {
//     let id = req.params.id
//     let db = await connect();

//     let doc = await db.collection("posts").findOne({_id: mongo.ObjectId(id)})
//     res.json(doc)
// })

app.get('/posts', async (req, res) => {
    let db = await connect()   //pristup db objektu
    let query = req.query; //parametri kojij se nalaze iza upitnika
    
    let selekcija = {}
    if(query.ime){
        selekcija.ime = query.ime//pretražujemo po imenu
    }//ako ime postoji
    
    console.log("Selekcija", selekcija)

   // let cursor = await db.collection("posts").find(selekcija) ukoliko želimo pretraživat po gore navedenoj 
   //selekciji preko imena, u postmanu se nakon "posts" dodaje ?ime=Teran i izbacuje nam samo Teran
   let cursor = await db.collection("posts").find()
    //.sort({"parametre poredaj po:..."})

    let results = await cursor.toArray()

    res.json(results)
});

app.get('/malvazija', async (req, res) => {
    let db = await connect()  
    let query = req.query;

    let cursor = await db.collection("malvazija").find()
    let results = await cursor.toArray()

    res.json(results)
});

app.get('/rose', async (req, res) => {
    let db = await connect()  
    let query = req.query;

    let cursor = await db.collection("rose").find()
    let results = await cursor.toArray()

    res.json(results)
});

app.get('/merlot', async (req, res) => {
    let db = await connect()  
    let query = req.query;

    let cursor = await db.collection("merlot").find()
    let results = await cursor.toArray()

    res.json(results)
});

app.get('/brut', async (req, res) => {
    let db = await connect()  
    let query = req.query;

    let cursor = await db.collection("brut").find()
    let results = await cursor.toArray()

    res.json(results)
});

app.get("/artikli", (req, res) => {
    let artikli = storage.artikl
    res.json(artikli)
});

app.get("/posts_memory", (req, res) => {
    let posts = storage.posts
    res.json(posts)
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