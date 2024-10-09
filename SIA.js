// Simulador de umidade do solo (0 a 100)
let umidadeSolo = 30; // Exemplo de umidade inicial
const umidadeIdeal = 50; // Umidade ideal para irrigação

function verificarIrrigacao() {
    if (umidadeSolo < umidadeIdeal) {
        irrigar();
    } else {
        console.log("O solo está úmido o suficiente. Sem irrigação necessária.");
    }
}

function irrigar() {
    console.log("Irrigando o solo...");
    umidadeSolo += 20; // Aumenta a umidade após irrigação
    if (umidadeSolo > 100) {
        umidadeSolo = 100; // Limita a umidade ao máximo de 100
    }
    console.log(`Umidade do solo após irrigação: ${umidadeSolo}`);
}

// Simula a verificação de irrigação a cada 5 segundos
setInterval(() => {
    console.log(`Umidade atual do solo: ${umidadeSolo}`);
    verificarIrrigacao();
}, 5000);