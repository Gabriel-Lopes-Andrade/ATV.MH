const bancoDeDados = [
    {
        id: 1, 
        nome: "Anjanath", 
        dados: "Um monstro hostil que lutará contra qualquer coisa. Cuidado com as mordidas e os chutes perigosos. Ele é conhecido por sua agressividade e por ser um dos primeiros grandes monstros que os caçadores enfrentam com mais frequência.",
        arquivo: "Anjanath"
    },
    {
        id: 2, 
        nome: "Rathalos", 
        dados: "O Rei dos Céus. Um predador terrível que ataca do alto com garras venenosas. Curiosamente, apesar de parecer um dragão e cuspir fogo, é classificado como uma Serpe Voadora.",
        arquivo: "Rathalos"
    },
    {
        id: 3, 
        nome: "Rathian", 
        dados: "A Rainha da Terra. Possui uma cauda venenosa extremamente perigosa e prefere combate terrestre. Diferente do Rathalos, a Rathian é mais terrestre.",
        arquivo: "Rathian"
    }
];

// 1. Configuração dos Áudios
const musicaFundo = new Audio('./AUDIO/audio.principal.mp3');
musicaFundo.loop = true;
musicaFundo.volume = 0.4;

const somEfeito = new Audio(); 

function buscarMonstro() {
    // Inicia a música de fundo no primeiro clique
    musicaFundo.play().catch(() => console.log("Aguardando interação..."));

    const idDigitado = document.getElementById("idMonstro").value;
    const monstro = bancoDeDados.find((m) => m.id == idDigitado);
    const areaResultado = document.getElementById("resultado");

    // Pausa o fundo para o efeito tocar
    musicaFundo.pause();

    if (monstro) {
        // --- CASO ENCONTRE O MONSTRO ---
        areaResultado.style.display = "block";
        document.getElementById("nome").innerText = monstro.nome;
        document.getElementById("dados").innerText = monstro.dados;
        
        // Padroniza para minúsculo para as imagens funcionarem
        const nomeArquivo = monstro.arquivo.toLowerCase();
        const caminhoBase = `./IMG/${nomeArquivo}`;
        
        document.getElementById("image").src = `${caminhoBase}.png`;
        document.getElementById("logo").src = `${caminhoBase}_logo.png`;

        // Efeito visual
        areaResultado.classList.remove("fade-in");
        void areaResultado.offsetWidth; 
        areaResultado.classList.add("fade-in");

        // CORREÇÃO AQUI: Toca o som específico do monstro (ex: anjanath.mp3)
        somEfeito.src = `./AUDIO/${nomeArquivo}.mp3`;
        somEfeito.play();

    } else {
        // --- CASO NÃO ENCONTRE ---
        areaResultado.style.display = "none";
        alert("Monstro não encontrado! Tente os IDs 1, 2 ou 3.");

        // CORREÇÃO AQUI: Toca o som de erro
        somEfeito.src = './AUDIO/erro.mp3'; 
        somEfeito.play();
    }

    // Quando o rugido ou erro acabar, a música principal volta
    somEfeito.onended = () => {
        musicaFundo.play();
    };
}