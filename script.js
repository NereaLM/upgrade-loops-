//ITERACION #1: USA INCLUDES

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']



products.forEach( (item) =>{
    if(item.includes("Camiseta")) {
        console.log(item)
    }
})


//ITERACIÓN #2: CONDICIONALES AVANZADAS

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***
//Puedes usar este array para probar tu función:


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let print = (data) => console.log(data)

let isAproved = (data) => {
    for (let i = 0; i < data.length; i++){
        if ((data[i].T1 === true && data[i].T2 === true) || (data[i].T2 === true && data[i].T3 === true) || (data[i].T1 === true && data[i].T3 === true)){
            print (data[i].name + "is aproved")
        } else {
            print (data[i].name + "is not aproved")
        }
    }
}

isAproved(alumns)


//ITERACIÓN #3: PROBANDO FOR...OF

//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let value of placesToTravel) {
    console.log(value);
}



//ITERACIÓN #4: PROBANDO FOR...IN

//Usa un **for...in** para imprimir por consola los datos del alienígena. Puedes usar este objeto:


const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for( const prop in alien){
    console.log(`${prop}: ${alien[prop]}`);
}
