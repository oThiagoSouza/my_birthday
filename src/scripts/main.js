AOS.init();

const diaAniversario = new Date("Oct 15, 2023 21:00:00")
const timeStampDiaAniversario = diaAniversario.getTime()


const meuIntervalo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    const distanciaAteAniversario = timeStampDiaAniversario - timeStampAtual
    const contador = document.getElementById('contador')

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteAniversario = Math.floor(distanciaAteAniversario / diasEmMs)
    const horasAteAniversario = Math.floor((distanciaAteAniversario % diasEmMs)/horasEmMs)
    const minutosAteAniversario = Math.floor((distanciaAteAniversario % horasEmMs) / minutosEmMs)
    const segundosAteAniversario = Math.floor ((distanciaAteAniversario % minutosEmMs)/ 1000)

    contador.style.color = '#f48c06'
    contador.innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`
}, 1000)
