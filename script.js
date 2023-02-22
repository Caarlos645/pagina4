var iphone = {
    nombre: "Iphone 13",
    ram: "4 GB",
    ssd: "256 GB",
    camara: 12,
};

function movil() {
    document.getElementById("datos");
    alert(
        `Este es el telefono ${iphone.nombre} Las características son las siguientes:
        Memoria RAM: ${iphone.ram} Memoria SSD: ${iphone.ssd} Cámara: ${iphone.camara} Mpx`
    );
}

function crearFecha() {
    let fecha = document.getElementById("texto");
    const d = new Date();
    let text = d.toLocaleDateString();
    fecha.innerHTML = "";

    fecha.innerHTML = `
    <li class="texto">
    Tienda de moviles de Palma del Río, 14700 (Córdoba) ${text}
</li>
    `
}



