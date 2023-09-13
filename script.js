// Función para calcular el costo total de los productos mecánicos
function calcularTotalMecanica() {
    const productosMecanicos = [
        { id: 'puerta', precio: 100 },
        { id: 'neumatico', precio: 100 },
        { id: 'maletero', precio: 100 },
        { id: 'capot', precio: 100 },
        { id: 'discoEmbrague', precio: 300 },
        { id: 'radiador', precio: 300 },
        { id: 'filtroCombustible', precio: 300 },
        { id: 'chapasMetalicas', precio: 100 },
        { id: 'partesMotor', precio: 100 },
        { id: 'ejeTransmision', precio: 150 },
        { id: 'pastillasFreno', precio: 300 }
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
        { id: 'kitReparacionAvanzado', precio: 750 },
        { id: 'ganzuaAvanzada', precio: 800 }
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
    const totalMecanica = Math.round(calcularTotalMecanica()*1.1);
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
