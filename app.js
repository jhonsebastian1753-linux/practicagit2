const ciudades = [
    {
        nombre: "cartago",
        habitantes: 143.613,
        mtroNivelMar: 2600,
        temperaturaPromedio: 14,
        coordenadas: [4.711, -74.072],
        sitiosInteres: { "01": "parque simon bolivar", "02": "Zoológico" }
    },
    {
        nombre: "Medellín",
        habitantes: 2500000,
        mtroNivelMar: 1500,
        temperaturaPromedio: 22,
        coordenadas: [6.247, -75.565],
        sitiosInteres: { "01": "Parque Explora", "02": "jardin botanico" }
    },
    {
        nombre: "Cali",
        habitantes: 2200000,
        mtroNivelMar: 1000,
        temperaturaPromedio: 25,
        coordenadas: [3.451, -76.532],
        sitiosInteres: { "01": "Zoológico de Cali", "02": "Cristo Rey" }
    },
        {
        nombre: "Barranquilla",
        habitantes: 1200000,
        mtroNivelMar: 10,
        temperaturaPromedio: 28,
        coordenadas: [10.968, -74.781],
        sitiosInteres: { "01": "Malecon", "02": "Zoologico" }
    },
    {
        nombre: "Cartagena",
        habitantes: 1000000,
        mtroNivelMar: 2,
        temperaturaPromedio: 27,
        coordenadas: [10.399, -75.514],
        sitiosInteres: { "01": "Castillo San Felipe", "02": "Ciudad Amurallada" }
    },
    {
        nombre: "Santa Marta",
        habitantes: 500000,
        mtroNivelMar: 6,
        temperaturaPromedio: 27,
        coordenadas: [11.240, -74.199],
        sitiosInteres: { "01": "Parque Tayrona", "02": "Sierra Nevada" }
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