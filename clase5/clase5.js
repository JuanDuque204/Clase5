//callback

const GradosACentigrados = gradosF => (5/9)*(gradosF-32);
const mostrar = (callback,grados)=>{
    //usa la funcion que llegó como parametro
    let gradosC=callback(grados);
    console.log(gradosC);

}

mostrar(GradosACentigrados,70);

//objetos
//primera forma
const perro = {
    nombre: "Pulgas",
    edad: 3,
    color: "negro",

    nombrarperro(nombre){
        return this.nombre = nombre;
    },
    
    caracteristicas:{
        raza:"Bulldog frances",
        altura: 20,
        peso:30,
        vacunas: true,
        alimento:"nutrecan"
    }
}

//segunda forma
const auto={};
auto.modelo=1986;
auto.color="verde";
auto.caracteristicas={
    marca:"bmw",
    cilindraje:2500
}

console.log(perro);
console.log(auto);

//acceder a las propiedades
console.log(perro.nombre);


const Animal = new Object();
Animal.nombre="serpiente";


const arreglo = [perro,Animal];


arreglo.forEach(objeto => {

    //cambiar la propiedad nombre
    
    objeto.nombre = "Lola";

    //nueva propiedad

    objeto.creadoEn = 2024;
}); 

console.log(perro);
console.log(Animal);


//destructing (obetener propiedades)

const {color}= perro;
console.log(color);