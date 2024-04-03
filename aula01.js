const player = window.document.getElementById('player');
const screen = window.document.getElementById('screen');
const guns = window.document.getElementById('guns');
const gameOver = window.document.getElementById('game_over');
const tiro = window.document.getElementById('tiro_audio');
guns.focus()

function recon() {
    function gerar() {
        var dictionary = [
            'eu', 'você', 'ele', 'ela', 'nós', 'vós', 'eles', 'elas', 'você', 'vocês', 
            'como', 'quando', 'onde', 'porque', 'por que', 'por quê', 'ser', 'estar', 
            'ter', 'fazer', 'poder', 'querer', 'ir', 'vir', 'saber', 'ver', 'dar', 
            'falar', 'pensar', 'dizer', 'achar', 'sentir', 'ouvir', 'olhar', 'comer', 
            'beber', 'dormir', 'andar', 'correr', 'chegar', 'partir', 'ficar', 'sair', 
            'voltar', 'trabalhar', 'estudar', 'jogar', 'brincar', 'viver', 'morrer', 
            'amor', 'amizade', 'família', 'pai', 'mãe', 'irmão', 'irmã', 'filho', 'filha', 
            'amigo', 'amiga', 'namorado', 'namorada', 'casamento', 'feliz', 'triste', 
            'alegre', 'cansado', 'contente', 'preocupado', 'ocupado', 'chateado', 
            'bonito', 'feio', 'alto', 'baixo', 'grande', 'pequeno', 'novo', 'velho', 
            'bom', 'mau', 'certo', 'errado', 'verdade', 'mentira', 'certeza', 'dúvida', 
            'vida', 'morte', 'dia', 'noite', 'hora', 'minuto', 'segundo', 'ontem', 'hoje', 
            'amanhã', 'agora', 'sempre', 'nunca', 'tudo', 'nada', 'algum', 'nenhum', 
            'muito', 'pouco', 'mais', 'menos', 'tão', 'assim', 'tanto', 'talvez', 
            'certamente', 'provavelmente', 'possivelmente', 'realmente', 'exatamente', 
            'absolutamente', 'obviamente', 'principalmente', 'especialmente', 'inclusive', 
            'além', 'através', 'mesmo', 'outro', 'todo', 'cada', 'alguns', 'muitos', 
            'poucos', 'vários', 'nenhuns', 'uns', 'tudo', 'coisa', 'pessoa', 'lugar', 
            'tempo', 'modo', 'meio', 'razão', 'motivo', 'modo', 'maneira', 'fim', 'objetivo', 
            'meio', 'forma', 'efeito', 'resultado', 'causa', 'consequência', 'relação', 
            'número', 'quantidade', 'porcentagem', 'parte', 'todo', 'metade', 'inteiro', 
            'porção', 'algum', 'nada', 'cada', 'alguns', 'muitos', 'poucos', 'vários', 
            'todos', 'tudo', 'ninguém', 'alguém', 'qualquer', 'ninguém', 'nada', 'quem', 
            'cujo', 'cuja', 'qual', 'qualquer', 'onde', 'quando', 'porque', 'como', 'se', 
            'que', 'que', 'para', 'por', 'de', 'em', 'a', 'com', 'entre', 'contra', 'sem', 
            'sobre', 'através', 'até', 'para', 'porque', 'apesar', 'mesmo', 'ainda', 
            'assim', 'logo', 'então', 'portanto', 'pois', 'entretanto', 'todavia', 
            'contudo', 'porém', 'ainda', 'assim', 'porque', 'aliás', 'isto', 'aquilo', 
            'isso', 'aquilo', 'estas', 'estes', 'aqueles', 'aquele', 'essa', 'esta', 
            'esses', 'essas', 'aquele', 'aquela', 'aqui', 'ali', 'acolá', 'perto', 
            'longe', 'dentro', 'fora', 'atrás', 'adiante', 'abaixo', 'acima', 'sobre', 
            'debaixo', 'embaixo', 'em cima', 'ao lado', 'através', 'ao redor', 'diante', 
            'de encontro', 'oposto', 'para', 'até', 'antes', 'depois', 'de cima', 'debaixo', 
            'durante', 'então', 'logo', 'mais tarde', 'depois', 'agora', 'já', 'atualmente', 
            'hoje', 'nesta época', 'imediatamente', 'logo que', 'imediatamente', 'em breve', 
            'de repente', 'subitamente', 'até agora', 'ao longo', 'desde', 'ainda', 'por enquanto', 
            'desde então', 'durante', 'até agora', 'último', 'próximo', 'futuro', 'futuramente', 
            'sempre', 'nunca', 'raramente', 'às vezes', 'muitas vezes', 'geralmente', 'normalmente', 
            'sempre', 'agora', 'então', 'até', 'assim que', 'quando', 'antes', 'depois', 'enquanto', 
            'desde que', 'apesar de', 'apesar de', 'embora', 'embora', 'apesar de', 'apesar de', 
            'se bem que', 'se', 'a menos que', 'a não ser que', 'caso', 'contanto que', 'desde que', 
            'embora', 'mesmo que', 'mesmo se', 'não obstante', 'no caso', 'no entanto', 'por mais que', 
            'quanto', 'se', 'sem que', 'apesar de', 'além de', 'assim como', 'como se', 'conforme', 
            'consoante', 'contanto que', 'desde que', 'embora', 'em vez'
        ];
        
        var enemy = document.createElement('div');
        var content = document.createElement('span');
        enemy.classList.add('attack');
        content.classList.add('content');
        dictionary.sort(() => Math.random() -0.5);
        content.innerText = dictionary[0];
        screen.appendChild(enemy)
        enemy.appendChild(content)
        enemy.style.left = `${(window.innerWidth / Math.floor(Math.random() * 10) + 1) - 100}px`;
    }
    function atirar(alvo) { 
        var municao = document.createElement('div');
        var posX = alvo.offsetLeft;
        var posY = alvo.offsetTop;
        municao.classList.add('municao');
        alvo.appendChild(municao);
        municao.style.left = `calc(45vw - ${posX}px)`;
        municao.style.top = `calc((100vh - 150px) - ${posY}px)`
        console.log(`calc(100vh - ${posY}px)`)
        var sleep = 1
        tiro.play()

        setInterval(() => {
            if(municao.offsetLeft == 0) {
                alvo.style.backgroundImage = "url('https://jheroldy.github.io/word-space.io/explosao.gif')";
                setInterval(() => {
                    sleep++
                }, 1000)
                if(sleep > 2) {
                    alvo.remove();
                }
            }
        })
    }
    setInterval(() => {
        gerar()
    }, 7000)
    // SIMULAÇAO
    guns.addEventListener('input', () => {
        var attacks = window.document.querySelectorAll('.attack');
        var textContent = window.document.querySelectorAll('.content');
        attacks.forEach((alvo, index) => {
            var  gunsForm = guns.value.toLowerCase()
            if( gunsForm === alvo.children[0].innerText) {
                atirar(alvo, index)
                guns.value = ''
            }
        })
       
    })
}
recon()

