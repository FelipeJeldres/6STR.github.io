const factorChatarra = 1.5;
const factorMetalChatarra = 1.6;
const factorPlastico = 1.7;
const factorGoma = 1.7;
const factorAcero = 1.7;

// Definir la cantidad de materiales necesarios para cada item
const materiales = {
    ruedas: { chatarra: 500 },
    guardabarros: { chatarra: 475 },
    faldones: { chatarra: 500 },
    'parachoques-frontal': { chatarra: 550 },
    aleron: { chatarra: 600 },
    suspension: { acero: 60, metalChatarra: 200, goma: 150, plastico: 75 },
    frenos: { acero: 65, metalChatarra: 250, goma: 215, plastico: 115 },
    'parachoques-trasero': { chatarra: 600 },
    motor: { acero: 65, metalChatarra: 250, goma: 215, plastico: 115 },
    capot: { chatarra: 500 },
    turbo: { acero: 65, metalChatarra: 250, goma: 195, plastico: 95 },
    bocina: { chatarra: 500 },
    'caja-de-cambios': { acero: 60, metalChatarra: 200, goma: 150, plastico: 75 },
    xenon: { chatarra: 400 },
    'vidrios-polarizados': { chatarra: 400 },
    'diseno-de-neon': { chatarra: 400 },
    'placa-nueva': { chatarra: 500 },
    extras: { chatarra: 400 },
    livery: { chatarra: 550 },
    'pintura-primaria': { chatarra: 600 },
    'pintura-secundaria': { chatarra: 600 },
    'tipo-de-pintura': { chatarra: 400 },
    volante: { chatarra: 450 },
    'color-de-humo': { chatarra: 450 },
    interior: { chatarra: 550 },
    tablero: { chatarra: 450 },
    'neones-activos': { chatarra: 500 },
    'color-de-xenon': { chatarra: 400 },
    'color-neon': { chatarra: 400 },
    'spray-camaleon': { chatarra: 2000 },
    'partes-esteticas': { chatarra: 450 },
};

function calcularPrecio() {
    // Obtener la cantidad de cada item desde los campos de entrada
    const cantidadRuedas = parseFloat(document.getElementById('ruedas').value);
    const cantidadGuardabarros = parseFloat(document.getElementById('guardabarros').value);
    const cantidadFaldones = parseFloat(document.getElementById('faldones').value);
    const cantidadParachoquesFrontal = parseFloat(document.getElementById('parachoques-frontal').value);
    const cantidadAleron = parseFloat(document.getElementById('aleron').value);
    const cantidadSuspension = parseFloat(document.getElementById('suspension').value);
    const cantidadFrenos = parseFloat(document.getElementById('frenos').value);
    const cantidadParachoquesTrasero = parseFloat(document.getElementById('parachoques-trasero').value);
    const cantidadMotor = parseFloat(document.getElementById('motor').value);
    const cantidadCapot = parseFloat(document.getElementById('capot').value);
    const cantidadTurbo = parseFloat(document.getElementById('turbo').value);
    const cantidadBocina = parseFloat(document.getElementById('bocina').value);
    const cantidadCajaDeCambios = parseFloat(document.getElementById('caja-de-cambios').value);
    const cantidadXenon = parseFloat(document.getElementById('xenon').value);
    const cantidadVidriosPolarizados = parseFloat(document.getElementById('vidrios-polarizados').value);
    const cantidadDisenoDeNeon = parseFloat(document.getElementById('diseno-de-neon').value);
    const cantidadPlacaNueva = parseFloat(document.getElementById('placa-nueva').value);
    const cantidadExtras = parseFloat(document.getElementById('extras').value);
    const cantidadLivery = parseFloat(document.getElementById('livery').value);
    const cantidadPinturaPrimaria = parseFloat(document.getElementById('pintura-primaria').value);
    const cantidadPinturaSecundaria = parseFloat(document.getElementById('pintura-secundaria').value);
    const cantidadTipoDePintura = parseFloat(document.getElementById('tipo-de-pintura').value);
    const cantidadVolante = parseFloat(document.getElementById('volante').value);
    const cantidadColorDeHumo = parseFloat(document.getElementById('color-de-humo').value);
    const cantidadInterior = parseFloat(document.getElementById('interior').value);
    const cantidadTablero = parseFloat(document.getElementById('tablero').value);
    const cantidadNeonesActivos = parseFloat(document.getElementById('neones-activos').value);
    const cantidadColorDeXenon = parseFloat(document.getElementById('color-de-xenon').value);
    const cantidadColorNeon = parseFloat(document.getElementById('color-neon').value);
    const cantidadSprayCamaleon = parseFloat(document.getElementById('spray-camaleon').value);
    const cantidadPartesEsteticas = parseFloat(document.getElementById('partes-esteticas').value);

    // Calcular el precio total para cada item
    const precioTotalRuedas = calcularPrecioItem('ruedas', cantidadRuedas);
    const precioTotalGuardabarros = calcularPrecioItem('guardabarros', cantidadGuardabarros);
    const precioTotalFaldones = calcularPrecioItem('faldones', cantidadFaldones);
    const precioTotalParachoquesFrontal = calcularPrecioItem('parachoques-frontal', cantidadParachoquesFrontal);
    const precioTotalAleron = calcularPrecioItem('aleron', cantidadAleron);
    const precioTotalSuspension = calcularPrecioItem('suspension', cantidadSuspension);
    const precioTotalFrenos = calcularPrecioItem('frenos', cantidadFrenos);
    const precioTotalParachoquesTrasero = calcularPrecioItem('parachoques-trasero', cantidadParachoquesTrasero);
    const precioTotalMotor = calcularPrecioItem('motor', cantidadMotor);
    const precioTotalCapot = calcularPrecioItem('capot', cantidadCapot);
    const precioTotalTurbo = calcularPrecioItem('turbo', cantidadTurbo);
    const precioTotalBocina = calcularPrecioItem('bocina', cantidadBocina);
    const precioTotalCajaDeCambios = calcularPrecioItem('caja-de-cambios', cantidadCajaDeCambios);
    const precioTotalXenon = calcularPrecioItem('xenon', cantidadXenon);
    const precioTotalVidriosPolarizados = calcularPrecioItem('vidrios-polarizados', cantidadVidriosPolarizados);
    const precioTotalDisenoDeNeon = calcularPrecioItem('diseno-de-neon', cantidadDisenoDeNeon);
    const precioTotalPlacaNueva = calcularPrecioItem('placa-nueva', cantidadPlacaNueva);
    const precioTotalExtras = calcularPrecioItem('extras', cantidadExtras);
    const precioTotalLivery = calcularPrecioItem('livery', cantidadLivery);
    const precioTotalPinturaPrimaria = calcularPrecioItem('pintura-primaria', cantidadPinturaPrimaria);
    const precioTotalPinturaSecundaria = calcularPrecioItem('pintura-secundaria', cantidadPinturaSecundaria);
    const precioTotalTipoDePintura = calcularPrecioItem('tipo-de-pintura', cantidadTipoDePintura);
    const precioTotalVolante = calcularPrecioItem('volante', cantidadVolante);
    const precioTotalColorDeHumo = calcularPrecioItem('color-de-humo', cantidadColorDeHumo);
    const precioTotalInterior = calcularPrecioItem('interior', cantidadInterior);
    const precioTotalTablero = calcularPrecioItem('tablero', cantidadTablero);
    const precioTotalNeonesActivos = calcularPrecioItem('neones-activos', cantidadNeonesActivos);
    const precioTotalColorDeXenon = calcularPrecioItem('color-de-xenon', cantidadColorDeXenon);
    const precioTotalColorNeon = calcularPrecioItem('color-neon', cantidadColorNeon);
    const precioTotalSprayCamaleon = calcularPrecioItem('spray-camaleon', cantidadSprayCamaleon);
    const precioTotalPartesEsteticas = calcularPrecioItem('partes-esteticas', cantidadPartesEsteticas);

    // Calcular el precio total
    const precioTotal = precioTotalRuedas +
                       precioTotalGuardabarros +
                       precioTotalFaldones +
                       precioTotalParachoquesFrontal +
                       precioTotalAleron +
                       precioTotalSuspension +
                       precioTotalFrenos +
                       precioTotalParachoquesTrasero +
                       precioTotalMotor +
                       precioTotalCapot +
                       precioTotalTurbo +
                       precioTotalBocina +
                       precioTotalCajaDeCambios +
                       precioTotalXenon +
                       precioTotalVidriosPolarizados +
                       precioTotalDisenoDeNeon +
                       precioTotalPlacaNueva +
                       precioTotalExtras +
                       precioTotalLivery +
                       precioTotalPinturaPrimaria +
                       precioTotalPinturaSecundaria +
                       precioTotalTipoDePintura +
                       precioTotalVolante +
                       precioTotalColorDeHumo +
                       precioTotalInterior +
                       precioTotalTablero +
                       precioTotalNeonesActivos +
                       precioTotalColorDeXenon +
                       precioTotalColorNeon +
                       precioTotalSprayCamaleon +
                       precioTotalPartesEsteticas;

    // Mostrar el precio total
    document.getElementById('precio-total').textContent = precioTotal.toFixed(2);

    // Calcular y mostrar la cantidad total de materiales
    const materialesTotales = calcularMaterialesTotales();
    const materialesList = document.getElementById('materiales-list');
    materialesList.innerHTML = '';

    for (const material in materialesTotales) {
        const cantidadMaterial = materialesTotales[material];
        const li = document.createElement('li');
        li.textContent = `${material}: ${cantidadMaterial} unidades`;
        materialesList.appendChild(li);
    }
}

function calcularPrecioItem(item, cantidad) {
    const materialesItem = materiales[item];
    let precioTotal = 0;

    for (const material in materialesItem) {
        const factor = obtenerFactor(material);
        precioTotal += materialesItem[material] * factor * cantidad;
    }

    return precioTotal;
}

function obtenerFactor(material) {
    switch (material) {
        case 'chatarra':
            return factorChatarra;
        case 'metalChatarra':
            return factorMetalChatarra;
        case 'plastico':
            return factorPlastico;
        case 'goma':
            return factorGoma;
        case 'acero':
            return factorAcero;
        default:
            return 0;
    }
}

function calcularMaterialesTotales() {
    const materialesTotales = {};

    for (const item in materiales) {
        const cantidad = parseFloat(document.getElementById(item).value);
        actualizarMaterialesTotales(materialesTotales, item, cantidad);
    }

    return materialesTotales;
}

function actualizarMaterialesTotales(materialesTotales, item, cantidad) {
    const materialesItem = materiales[item];

    for (const material in materialesItem) {
        if (materialesTotales.hasOwnProperty(material)) {
            materialesTotales[material] += materialesItem[material] * cantidad;
        } else {
            materialesTotales[material] = materialesItem[material] * cantidad;
        }
    }
}