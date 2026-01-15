// gestion_datos.js
// Inventario de productos 
let inventario = []; // Array para guardar productos
let idCounter = 1;   // Contador para generar IDs únicos automáticamente

// Set para garantizar unicidad de IDs 
const idsUnicos = new Set();

//  Map para asociar categoría -> producto 
const categorias = new Map();

/* Función para agregar un producto*/
function aggProduct() {
    let nombre = prompt("Ingrese el nombre del producto:").trim();
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    let categoria = prompt("Ingrese la categoría del producto:").trim();

    // Validación básica
    if (!nombre || isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0 || !categoria) {
        alert("Datos incompletos o incorrectos. Intente de nuevo.");
        return;
    }

    // Generamos un ID único
    let id = idCounter++;
    idsUnicos.add(id); // Agregamos al Set

    // Creamos el objeto producto
    let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };

    // Agregamos al inventario
    inventario.push(producto);

    // Guardamos en el Map: categoría -> nombre del producto
    categorias.set(categoria, nombre);

    alert("Producto agregado correctamente al inventario.");
}

/* Función para mostrar inventario*/
function mostrarInv() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
        return;
    }

    let msj = "=== Inventario ===\n";

    // Recorremos inventario con for...of
    for (let p of inventario) {
        msj += `ID: ${p.id} | Producto: ${p.nombre} | Precio: ${p.precio} | Cantidad: ${p.cantidad} | Categoría: ${p.categoria}\n`;
    }

    alert(msj);

    // Ejemplo de iteración con for...in sobre el primer producto
    let primerProducto = inventario[0];
    console.log("Propiedades del primer producto:");
    for (let key in primerProducto) {
        console.log(`${key}: ${primerProducto[key]}`);
    }

    // Ejemplo de Object.keys, Object.values, Object.entries
    console.log("Keys:", Object.keys(primerProducto));
    console.log("Values:", Object.values(primerProducto));
    console.log("Entries:", Object.entries(primerProducto));
}

/*Función para mostrar Set de IDs */
function mostrarIDs() {
    console.log("IDs únicos del inventario (Set):");
    for (let id of idsUnicos) {
        console.log(id);
    }
}

/* Función para mostrar Map de categorías*/
function mostrarCategorias() {
    console.log("Categorías y productos (Map):");
    categorias.forEach((valor, clave) => {
        console.log(`Categoría: ${clave} | Producto: ${valor}`);
    });
}

/*Función de estadísticas */
function calcEstats() {
    let valorTotal = 0;
    let totalProductos = 0;

    for (let p of inventario) {
        valorTotal += p.precio * p.cantidad;
        totalProductos += p.cantidad;
    }

    alert(`=== Estadísticas ===
Valor total del inventario: ${valorTotal}
Cantidad total de productos: ${totalProductos}`);
}

/*Función de salir */
function exit() {
    alert("Saliendo del programa...");
}

/* Menú interactivo*/
let opcion = "";

while (opcion !== "6") {
    opcion = prompt(
        "=== MENÚ ===\n" +
        "1. Agregar producto\n" +
        "2. Mostrar inventario\n" +
        "3. Mostrar IDs únicos (Set)\n" +
        "4. Mostrar categorías (Map)\n" +
        "5. Calcular estadísticas\n" +
        "6. Salir"
    );

    switch (opcion) {
        case "1":
            aggProduct();
            break;
        case "2":
            mostrarInv();
            break;
        case "3":
            mostrarIDs();
            break;
        case "4":
            mostrarCategorias();
            break;
        case "5":
            calcEstats();
            break;
        case "6":
            exit();
            break;
        default:
            alert("Ingrese una opción válida.");
    }
}
