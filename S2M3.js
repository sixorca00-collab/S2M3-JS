//Inventario de productos.
let inventario = []; //Array para guardar productos.

/*Creacion de funciones
Empezamos por funcion para guardar un producto*/
function aggProduct(){
    let nombre = prompt("Ingrese el nombre de el producto: "); //Parse() es un convertidor de datos de un formato a otro.
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let cantidad =parseInt(prompt("Ingrese la cantidad del producto: "));

    //Validamos los datos.
    if(nombre === "" || isNaN(precio)|| isNaN(cantidad)){ //IsNaN es literalmente un transformador a numeros Is Not a Number.
        alert("Hay dato/s mal ingresados; vuelve a intentarlo.");
        return;
    };
    //Creamos el producto en el inventario.
    let producto ={ //
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
};

// En la siguiente linea lo agregamos a el inventario
inventario.push(producto);
alert("El producto se agrego a el inventario de objetos.");
};




//Funcion de mostrar inventario.
function mostrarInv(){
    if(inventario.length === 0){
        alert("El inventario esta vacio.");
        return;
    };
    let msj = "===Inventario:===\n" //\n es un salto de linea.  
    //Recorremos el inventario con un ciclo for.
    for (let i = 0; i< inventario.length; i++){
        let p = inventario[i];
        msj +=  `Producto: ${p.nombre} | Precio: ${p.precio} | Cantidad: ${p.cantidad}\n`;
    }
    alert(msj);
}
// Funcion de calcular estadisticas.
function calcEstats(){
    let valorTotal = 0;
    let totalProductos = 0;

    for(let i = 0; i < inventario.length; i++){
        //Operamos para saber el precio total haciendo precio * cantidad
        valorTotal += inventario[i].precio * inventario[i].cantidad; 
        //Recorremos en el for solo la cantidad
        totalProductos += inventario[i].cantidad;
    }
    alert(`====Estadisticas=== \n
        Valor total del inventario: ${valorTotal}\n
        Cantidad de productos en el inventario: ${totalProductos}`
    );
}

//Funcion de salir de el programa
function exit(){
    alert("Saliendo del programa...")
}
let opcion = "";
//Creamos el menú interactivo
while(opcion != "4"){
    opcion = prompt("===MENÚ===\n"+
    "1. Agregar producto\n" +
    "2. Mostrar inventario\n" +
    "3. Calcular estadisticas\n"+
    "4. Salir..."
);
//Damos funcionalidad al menú.
if(opcion === "1"){
    aggProduct();
}
else if(opcion === "2"){
    mostrarInv();
}
else if(opcion === "3"){
    calcEstats();
}
else if(opcion === "4"){
    exit();
}
else{
    alert("ingrese una opcion valida.")
}};
