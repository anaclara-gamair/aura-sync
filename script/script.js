const dados = [
    { nome: "Umidade", valor: "58%", icone: "bi-droplet-fill", cor: "#00bfff" },
    { nome: "Luminosidade", valor: "320 lux", icone: "bi-brightness-high-fill", cor: "#ffd700" },
    { nome: "Distância", valor: "87 cm", icone: "bi-arrows-expand", cor: "#00ffff" },
    { nome: "Gás", valor: "135 ppm", icone: "bi-wind", cor: "#00ff99" },
    { nome: "Temperatura", valor: "27.1 °C", icone: "bi-thermometer-half", cor: "#ff4d4d" },
    { nome: "Pressão", valor: "1013 hPa", icone: "bi-speedometer2", cor: "#7a5cff" }
  ];
  
  const container = document.getElementById("iconesContainer");
  
  dados.forEach(dado => {
    container.innerHTML += `
      <div class="icon-box">
        <i class="bi ${dado.icone}" style="background:${dado.cor}20; color:${dado.cor}"></i>
        <div class="valor">${dado.valor}</div>
        <div class="label">${dado.nome}</div>
      </div>
    `;
  });
  
  // ALERTA BASEADO NO QUE? NÃO SEI 
  document.getElementById("alertaTexto").innerHTML =
    `Detectado: Concentração elevada de Gás (NH₃). 
     Valor Atual: 135 ppm (Limite: 50 ppm)`;