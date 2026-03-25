const bancoDeDados = [
    {
        id: 1, 
        nome: "Anjanath", 
        dados: "Um monstro hostil que lutará contra qualquer coisa. Cuidado com as mordidas e os chutes perigosos. Ele é conhecido por sua agressividade e por ser um dos primeiros grandes monstros que os caçadores enfrentam com mais frequência. O Anjanath é um monstro terrestre que se assemelha a um dinossauro com características de tigre, incluindo uma crista óssea na cabeça e uma cauda poderosa. Ele é famoso por seu ataque de fogo, onde cospe chamas para causar dano aos caçadores.",
        arquivo: "Anjanath"
    },
    {
        id: 2, 
        nome: "Rathalos", 
        dados: "O Rei dos Céus. Um predador terrível que ataca do alto com garras venenosas. Curiosamente, apesar de parecer um dragão e cuspir fogo, é classificado como uma Serpe Voadora, um grande réptil alado. O Rathalos é frequentemente encontrado em áreas florestais e montanhosas, onde pode usar o terreno a seu favor para emboscar suas presas.",
        arquivo: "Rathalos"
    },
    {
        id: 3, 
        nome: "Rathian", 
        dados: "A Rainha da Terra. Possui uma cauda venenosa extremamente perigosa e prefere combate terrestre. Diferente do Rathalos, a Rathian é mais terrestre, mas ainda pode voar e atacar com suas garras e cauda venenosa. Ela é conhecida por ser territorial e agressiva, especialmente quando se trata de proteger seus filhotes.",
        arquivo: "Rathian"
    }
];

function buscarMonstro() {
    const idDigitado = document.getElementById("idMonstro").value;
    const monstro = bancoDeDados.find((m) => m.id == idDigitado);
    const areaResultado = document.getElementById("resultado");

    if (monstro) {
        // Reset da animação
        areaResultado.classList.remove("fade-in");
        void areaResultado.offsetWidth; 
        areaResultado.classList.add("fade-in");

        areaResultado.style.display = "block";
        
        document.getElementById("nome").innerText = monstro.nome;
        document.getElementById("dados").innerText = monstro.dados;
        
        // CONEXÃO LOCAL:
        // O ponto e a barra (./) indicam "procure na pasta atual"
        // Se suas fotos estiverem dentro da pasta IMG, o caminho precisa da pasta:
        // Garanta lowercase para corresponder aos nomes de arquivos (Linux é case-sensitive)
        const arquivoNormalizado = monstro.arquivo.toLowerCase();
        const caminhoBase = `./IMG/${arquivoNormalizado}`;
                
        // Aqui aplicamos o caminho e a extensão .png
        document.getElementById("image").src = `${caminhoBase}.png`;
        document.getElementById("logo").src = `${caminhoBase}_logo.png`;

    } else {
        alert("Monstro não encontrado! Tente os IDs 1, 2 ou 3.");
        areaResultado.style.display = "none";
    }
}