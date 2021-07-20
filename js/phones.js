class Phones {
    constructor(id, marca, gama, modelo, pantalla, sistemaOperativo, precio) {
        this.id = id;
        this.marca = marca;
        this.gama = gama;
        this.modelo = modelo;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.pantalla = pantalla;
    }


}


// ejemplos de telefonos
phone1 = new Phones(1, 'Motorola', 'Media', 'One Plus', '1280*792', 'Android', 20000);
phone2 = new Phones(2, 'Motorola', 'Media', 'One', '792*480', 'Android', 10000);
phone3 = new Phones(3, 'Samsung', 'Baja', 'J2', '1280*792', 'Android', 5000);

var arrayPhones = [];
arrayPhones.push(phone1);
arrayPhones.push(phone2);
arrayPhones.push(phone3);

class listaPhones {
//TODO: 

    get menor_precio() {
        //TODO: recorrer el array y devolver el phone que tenga menor precio



        return phone
    }

}


module.exports = {arrayPhones, Phones};


