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


//ITERACIÓN #5: PROBANDO FOR

//Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:


const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


for (let valor of placesToTravel){
    if (valor.id === 11 || valor.id === 40) {
        console.log("Numero encontrado: " + valor.id)
        placesToTravel.splice(placesToTravel.indexOf(valor),1)
    } 
    console.log(placesToTravel)
}


//ITERACIÓN #6: MIXED FOR...OF E INCLUDES

//Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
   
   
    let nuevoArray = toys.filter((value) => value.name.includes("gato"))
   
    console.log(nuevoArray)
   
   
    for (let i = 0; i < toys.length; i++) {
        if(toys[i].name.includes("gato")) {
            toys.splice(i,1)
            i--
        }
    }
   
    console.log(toys)
   

    
    //ITERACIÓN #7: FOR...OF AVANZADO

//Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (let toy of toys){
    if(toy.sellCount >= 15){
        popularToys.push(toys[toys.indexOf(toy)])
    }
}
console.log(popularToys);
