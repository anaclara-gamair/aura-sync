document.getElementById("uptime").innerText = "156 HOURS";
document.getElementById("lastUpdate").innerText = "29 MINUTES";

const alertas = [
  "Nivel medio: Sensor instavel",
  "Nivel grave: Falha critica",
  "Nivel medio: Luz instavel"
];

const lista = document.getElementById("listaAlertas");

alertas.forEach(a => {
  lista.innerHTML += `<li>${a}</li>`;
});