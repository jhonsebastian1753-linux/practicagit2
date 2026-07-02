const ciudades = [
    {
        nombre: "cartago",
        habitantes: 143.613,
        mtroNivelMar: 2600,
        temperaturaPromedio: 14,
        coordenadas: [4.711, -74.072],
        sitiosInteres: { "01": "parque simon bolivar", "02": "Zoológico" }
    }
];

const tbody = document.querySelector("#tablaCiudades tbody");

ciudades.forEach(ciudad => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${ciudad.nombre}</td>
        <td>${ciudad.habitantes}</td>
        <td>${ciudad.mtroNivelMar}</td>
        <td>${ciudad.temperaturaPromedio}</td>
        <td>[${ciudad.coordenadas.join(", ")}]</td>
        <td>${Object.entries(ciudad.sitiosInteres).map(([k, v]) => `${k}: ${v}`).join(", ")}</td>
    `;
    tbody.appendChild(fila);
});