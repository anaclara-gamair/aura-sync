const sensores = [
  {nome:"Umidade",valor:"58%",icone:"bi-droplet-fill",cor:"#00bfff"},
  {nome:"Luz",valor:"320 lux",icone:"bi-brightness-high",cor:"#ffd700"},
  {nome:"Distância",valor:"87cm",icone:"bi-arrows-expand",cor:"#00ffff"},
  {nome:"Gás",valor:"135ppm",icone:"bi-wind",cor:"#00ff99"},
  {nome:"Temp",valor:"27°",icone:"bi-thermometer-half",cor:"#ff4d4d"},
  {nome:"Pressão",valor:"1013",icone:"bi-speedometer2",cor:"#7a5cff"}
];

const container = document.getElementById("sensores");

sensores.forEach(d => {
  container.innerHTML += `
    <div class="icon-box">
      <i class="bi ${d.icone}" style="color:${d.cor}; font-size:24px;"></i>
      <strong>${d.valor}</strong>
      <div>${d.nome}</div>
    </div>
  `;
});

document.getElementById("alertaTexto").innerText =
  "Concentração elevada de gás detectada (135ppm)";

/* CONFIG PADRÃO */
const configPadrao = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "#ccc", font: { size: 10 } }
    }
  }
};

/* FUNÇÃO */
function criarGrafico(id, tipo, labels, data) {
  new Chart(document.getElementById(id), {
    type: tipo,
    data: {
      labels: labels,
      datasets: [{
        data: data,
        borderWidth: 2
      }]
    },
    options: configPadrao
  });
}

/* GRÁFICOS */
criarGrafico("pizza1","doughnut",["Temp","Umidade","Ar"],[35,35,30]);
criarGrafico("linha","line",["0","4","8","12","16","20"],[15,5,10,7,20,8]);
criarGrafico("barra","bar",["Seg","Ter","Qua","Qui","Sex"],[60,40,70,80,120]);
criarGrafico("pizza2","doughnut",["Bom","Moderado","Ruim"],[60,30,10]);
criarGrafico("barra2","bar",["1","2","3","4","5"],[10,20,30,40,50]);

new Chart(document.getElementById("horizontal"), {
  type: "bar",
  data: {
    labels: ["8h","10h","12h"],
    datasets: [{ data: [100,150,80] }]
  },
  options: { ...configPadrao, indexAxis: "y" }
});

/* ATIVIDADE */
const atividade = document.getElementById("atividade");

["Gás","Temperatura","Umidade","Pressão"].forEach(a=>{
  atividade.innerHTML += `<p>• ${a} atualizado</p>`;
});