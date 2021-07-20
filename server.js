let express = require('express');
let morgan = require('morgan');
let {arrayPhones, Phones} = require('./js/phones.js');

let app = express();

let port = 3000;
app.use(morgan('dev'));

// usado para capturar el body de un request
app.use(express.json());


app.get('/', (req, res) => {
    return res.json({respuesta: 'Hola mundo!!'});
})

app.get('/time', (req, res) => {
    let time = new Date();
    return res.json({time: time});
})

app.get('/phones', (req, res) => {
    console.log(arrayPhones);
    return res.json(arrayPhones);
})

app.get('/phones/:id', (req, res) => {
    let id = req.params.id;


    
    let arr = arrayPhones["arrayPhones"]
    const index = arr.findIndex(phone => phone.id == id);
    if (index !== -1) {
        respuesta = arr[index]; 
    } else {
        respuesta = {respuesta : 'Teléfono no encontrado'}
        }

        
    return res.json(respuesta); 
})

app.delete('/phones/:id', (req, res) => {
    let id = req.params.id;



    let arr = arrayPhones["arrayPhones"]
    const index = arr.findIndex(phone => phone.id == id);
    if (index !== -1) {
        arr.splice(index, 1); 
        console.log(arr)
        respuesta =  {respuesta : 'Teléfono borrado'}
    } else {
        respuesta = {respuesta : 'Teléfono no encontrado'}
        }



    return res.json(respuesta); 
})

app.post('/phones', (req, res) => {

    let id = req.body.id;
    let marca = req.body.marca;
    let gama = req.body.gama;
    let modelo = req.body.modelo;
    let pantalla = req.body.pantalla;
    let sistemaOperativo = req.body.sistemaOperativo;
    let precio = req.body.precio;
    
    console.log(id, marca, gama, modelo, pantalla, sistemaOperativo, precio)

    const phone = new Phones(id, marca, gama, modelo, pantalla, sistemaOperativo, precio)
    

    let arr = arrayPhones
    console.log(arr)
    const index = arr.findIndex(phone => phone.id == id);
    if (index === -1) {
        arrayPhones.push(phone)
         respuesta =  {respuesta : 'Teléfono agregado'}
     } else {
         respuesta = {respuesta : 'ID de Teléfono repetido'}
     }
     

    return res.json(respuesta); 
})



app.listen(port, () => {
    console.log('Server listening on port ' + port)

})
