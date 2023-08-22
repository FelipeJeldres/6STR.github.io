// Función para calcular el costo total de los productos mecánicos
function calcularTotalMecanica() {
    const productosMecanicos = [
        { id: 'puerta', precio: 150 },
        { id: 'neumatico', precio: 150 },
        { id: 'maletero', precio: 150 },
        { id: 'capot', precio: 150 },
        { id: 'discoEmbrague', precio: 450 },
        { id: 'radiador', precio: 450 },
        { id: 'filtroCombustible', precio: 450 },
        { id: 'chapasMetalicas', precio: 150 },
        { id: 'partesMotor', precio: 150 },
        { id: 'ejeTransmision', precio: 150 },
        { id: 'pastillasFreno', precio: 450 }
    ];

    let total = 0;

    productosMecanicos.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id).value);
        if (!isNaN(cantidad)) {
            total += cantidad * producto.precio;
        }
    });

    return total;
}

// Función para calcular el costo total de las herramientas
function calcularTotalHerramientas() {
    const productosHerramientas = [
        { id: 'ganzua', precio: 500 },
        { id: 'gato', precio: 100 },
        { id: 'kitReparacion', precio: 400 },
        { id: 'kitReparacionAvanzado', precio: 1500 }
    ];

    let total = 0;

    productosHerramientas.forEach(producto => {
        const cantidad = parseInt(document.getElementById(producto.id).value);
        if (!isNaN(cantidad)) {
            total += cantidad * producto.precio;
        }
    });

    return total;
}

// Función para mostrar el resultado en la página
function mostrarResultado() {
    const totalMecanica = calcularTotalMecanica()*1.1.toFixed(0);
    const totalHerramientas = calcularTotalHerramientas();
    const totalGeneral = totalMecanica + totalHerramientas;

    document.getElementById('resultadoTotalMecanica').textContent = totalMecanica;
    document.getElementById('resultadoTotalHerramientas').textContent = totalHerramientas;
    document.getElementById('resultadoTotalGeneral').textContent = totalGeneral;
}

// Asociar la función mostrarResultado al botón de calcular
const botonCalcular = document.querySelector('.btn-light');
botonCalcular.addEventListener('click', mostrarResultado);

const botonCalcular2 = document.querySelector('.btn-dark');
botonCalcular2.addEventListener('click', mostrarResultado);



