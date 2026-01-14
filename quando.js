/**
 * FUNÇÕES PARA A PÁGINA "QUANDO.HTML"
 * Versão carrossel - mostra apenas um card por vez
 */

// Verifica se estamos na página "quando.html"
if (window.location.pathname.includes('quando.html')) {



    // Dados das mensagens
    const quandoMessages = [
    {
        id: 1,
        when: "Quando se perguntar se somos diferentes demais…",
        response: "Nossas diferenças são o que tornam isso interessante. Eu não quero um espelho, quero você."
    },
    {
        id: 2,
        when: "Quando duvidar se isso vai dar certo…",
        response: "Certo é o que nos faz bem agora. E você me faz muito bem."
    },
    {
        id: 3,
        when: "Quando achar que é nova demais pra certas coisas…",
        response: "A gente vai no seu ritmo. Não tem manual, só o que sentimos."
    },
    {
        id: 4,
        when: "Quando sentir que estou em outra fase da vida…",
        response: "Minha fase ganhou mais sentido com você nela. Você me traz leveza."
    },
    {
        id: 5,
        when: "Quando achar que está 'atrasada' em algo…",
        response: "Não tem corrida. Cada um tem seu tempo, e eu gosto do nosso."
    },
    {
        id: 6,
        when: "Quando tiver medo de errar comigo…",
        response: "Errar é humano. Meu medo é você parar de tentar por causa do medo."
    },
    {
        id: 7,
        when: "Quando achar que fala demais sobre bobagens…",
        response: "Eu adoro suas bobagens. É nelas que vejo você mais solta."
    },
    {
        id: 8,
        when: "Quando fechar e não conseguir falar…",
        response: "Fico quieto do seu lado. Às vezes, companhia é a melhor conversa."
    },
    {
        id: 9,
        when: "Quando achar que não se expressa bem…",
        response: "Eu aprendo a sua linguagem. Me conta do seu jeito que eu entendo."
    },
    {
        id: 10,
        when: "Quando temer que eu canse ou desista…",
        response: "Cansei de muitas coisas, mas de escolher você, nunca."
    },
    {
        id: 11,
        when: "Quando a voz na sua cabeça disser 'não é o suficiente'…",
        response: "Diga a essa voz que ela está errada. Você é mais do que eu pedi à vida."
    },
    {
        id: 12,
        when: "Quando comparar nosso relacionamento com o dos outros…",
        response: "Não troco nossa história real por nenhuma foto perfeita de internet."
    },
    {
        id: 13,
        when: "Quando a ansiedade falar mais alto…",
        response: "Me dá sua mão. A gente respira fundo juntos, um dia de cada vez."
    },
    {
        id: 14,
        when: "Quando as emoções parecerem um turbilhão…",
        response: "Você não é demais. Você é humana. E eu não tenho medo dos seus sentimentos."
    },
    {
        id: 15,
        when: "Quando achar que não sabe de nada sobre amor…",
        response: "Amor não é saber, é cuidar. E você cuida muito bem de mim."
    },
    {
        id: 16,
        when: "Quando achar que eu não entendo seu mundo…",
        response: "Me ensina. Quero entender, mesmo que leve tempo."
    },
    {
        id: 17,
        when: "Quando nossas rotinas parecerem muito distantes…",
        response: "A gente se encontra no meio. Seu dia é importante pra mim."
    },
    {
        id: 18,
        when: "Quando achar que estou exigindo muito…",
        response: "Só exijo que a gente seja honesto. O resto, a gente constrói."
    },
    {
        id: 19,
        when: "Quando achar que está me devendo algo…",
        response: "Você não me deve nada. Estar aqui já é um presente."
    },
    {
        id: 20,
        when: "Quando nossas crenças surgirem como tema…",
        response: "Respeito seu caminho. A fé que tenho em nós é a que mais importa."
    },
    {
        id: 21,
        when: "Quando achar que a diferença de fé é um problema…",
        response: "Não é um problema, é uma conversa. E eu sempre vou querer escutar você."
    },
    {
        id: 22,
        when: "Quando um conflito parecer o fim do mundo…",
        response: "Nenhuma discussão nossa apaga o que sinto. A gente conserta."
    },
    {
        id: 23,
        when: "Quando tiver medo de brigar…",
        response: "Brigar não é ruim, desde que a gente não queira se machucar."
    },
    {
        id: 24,
        when: "Quando a insegurança antiga bater…",
        response: "Eu não sou eles. Sou eu. E eu fico."
    },
    {
        id: 25,
        when: "Quando disserem que você é 'muito sensível'…",
        response: "Sua sensibilidade é o que te faz perceber coisas lindas. Eu a protejo."
    },
    {
        id: 26,
        when: "Quando quiser mostrar uma força que não sente…",
        response: "Pode ser frágil. Minhas armas são pra te proteger, não pra você usar."
    },
    {
        id: 27,
        when: "Quando a pressão por amadurecer apertar…",
        response: "Amadurecer é uma jornada, não uma obrigação. Vou contigo."
    },
    {
        id: 28,
        when: "Quando notar um defeito seu e se encolher…",
        response: "Eu vejo seus defeitos e escolho ficar. Eles são parte do seu todo."
    },
    {
        id: 29,
        when: "Quando falhar em algo e se sentir pequena…",
        response: "Falhar não te diminui. Te mostra que está tentando. Eu te admiro por isso."
    },
    {
        id: 30,
        when: "Quando vier o pensamento: 'ele pode ir embora'…",
        response: "Vou lutar contra o que nos afasta. Minha escolha é ficar."
    },
    {
        id: 31,
        when: "Quando tudo parecer bom demais pra ser verdade…",
        response: "Às vezes coisas boas são verdadeiras sim. Deixa eu te mostrar."
    },
    {
        id: 32,
        when: "Quando o medo da perda apertar o peito…",
        response: "Aperta minha mão mais forte. Eu tô aqui, presente, agora."
    },
    {
        id: 33,
        when: "Quando achar que não ama 'do jeito certo'…",
        response: "Seu jeito é o certo pra mim. Não mude."
    },
    {
        id: 34,
        when: "Quando notar que está aprendendo a se relacionar…",
        response: "Eu também estou aprendendo. Que sorte a nossa, aprender juntos."
    },
    {
        id: 35,
        when: "Quando o mundo lá fora parecer hostil…",
        response: "Aqui entre nós pode ser um porto seguro. Eu faça questão disso."
    },
    {
        id: 36,
        when: "Quando a mente estiver um caos e as palavras sumirem…",
        response: "Fica em silêncio então. Meu carinho não precisa de palavras."
    },
    {
        id: 37,
        when: "Quando precisar de um tempo só pra você…",
        response: "Vai. Cuida de você. Te amo tanto que torço pelo seu sossego, mesmo longe."
    },
    {
        id: 38,
        when: "Quando precisar desabafar e achar que é peso…",
        response: "Seu fardo é meu também. Divide comigo, fica mais leve."
    },
    {
        id: 39,
        when: "Quando não souber nomear o que sente…",
        response: "Não precisa nomear. Só sentir. Eu seguro o barco."
    },
    {
        id: 40,
        when: "Quando a emoção for grande e confusa…",
        response: "Vamos desembaralhar juntos. Nenhum sentimento seu me assusta."
    },
    {
        id: 41,
        when: "Quando eu estiver distante (no celular, nos pensamentos)…",
        response: "Me cutuca. 'Volta pra mim'. Essa é a senha."
    },
    {
        id: 42,
        when: "Quando meu silêncio for mal interpretado…",
        response: "Me pergunta o que é. Às vezes meu silêncio é só cansaço, não falta de amor."
    },
    {
        id: 43,
        when: "Quando o futuro da faculdade/trabalho parecer um abismo…",
        response: "Não sei o que vem, mas sei que quero você sabendo dos meus planos."
    },
    {
        id: 44,
        when: "Quando achar que crescer é assustador…",
        response: "É assustador mesmo. Mas a gente não precisa crescer sozinho."
    },
    {
        id: 45,
        when: "Quando disserem que você é intensa…",
        response: "Eu amo sua intensidade. Ela me tira da mesmice."
    },
    {
        id: 46,
        when: "Quando achar que é 'complicada'…",
        response: "Coisas valiosas nunca são simples. E você é muito valiosa."
    },
    {
        id: 47,
        when: "Quando duvidar que eu te escolhi de verdade…",
        response: "Escolhi. Todos os dias. Até quando é difícil. Especialmente quando é difícil."
    },
    {
        id: 48,
        when: "Quando eu não perceber algo óbvio…",
        response: "Me aponta. Sou homem, não sou adivinho, mas sou esforçado."
    },
    {
        id: 49,
        when: "Quando eu errar em te entender…",
        response: "Me corrige. Sua verdade é meu mapa."
    },
    {
        id: 50,
        when: "Quando não souber o que quer da vida…",
        response: "Tudo bem. Aos 16, a única obrigação é descobrir quem você é. Eu te ajudo."
    },
    {
        id: 51,
        when: "Quando tiver certeza que me quer por perto…",
        response: "Essa é a única certeza que eu preciso. O resto a gente descobre."
    },
    {
        id: 52,
        when: "Quando o 'para sempre' der vertigem…",
        response: "Esquece o para sempre. Foca no 'hoje você me faz feliz'."
    },
    {
        id: 53,
        when: "Quando quiser viver o agora sem pensar…",
        response: "Vamos. O melhor do nosso amor é isso: o presente."
    },
    {
        id: 54,
        when: "Quando achar que precisa correr atrás de mim…",
        response: "Não precisa correr. Eu caminho ao seu lado."
    },
    {
        id: 55,
        when: "Quando achar que tem que mudar pra me agradar…",
        response: "O que me agrada é a autenticidade da pessoa que você já é."
    },
    {
        id: 56,
        when: "Quando tudo isso parecer uma grande novidade…",
        response: "É, e é lindo. Não tenho pressa de virar rotina. Cada fase é nova."
    },
    {
        id: 57,
        when: "Quando perceber que me ensina coisas novas…",
        response: "Você me mostra um mundo que eu havia esquecido. É meu maior aprendizado."
    },
    {
        id: 58,
        when: "Quando temer me machucar sem querer…",
        response: "Machucados acontecem. Desde que a gente cure, tá tudo bem."
    },
    {
        id: 59,
        when: "Quando temer que EU te machuque…",
        response: "Me alerte. Me mostre. Meu maior medo é ser a causa da sua dor."
    },
    {
        id: 60,
        when: "Quando sentir que a rotina está nos engolindo…",
        response: "Vamos inventar algo novo juntos. Nosso amor não é rotina, é escolha diária."
    },
    {
        id: 61,
        when: "Quando achar que não temos mais assunto…",
        response: "O silêncio entre a gente nunca foi vazio. Às vezes, só de estar junto, já é conversa."
    },
    {
        id: 62,
        when: "Quando vier a dúvida: 'será que ele me ama mesmo?'…",
        response: "Te amo. Palavra por palavra, gesto por gesto. E vou continuar mostrando."
    },
    {
        id: 63,
        when: "Quando pensar que poderia estar 'vivendo mais' sozinha…",
        response: "Viver não é só acumular experiências, é compartilhar momentos. E eu quero compartilhar com você."
    },
    {
        id: 64,
        when: "Quando achar que estou ocupado demais…",
        response: "Nada na minha vida é mais importante do que o tempo que passo com você. Me lembra disso sempre."
    },
    {
        id: 65,
        when: "Quando sentir que está dando muito trabalho…",
        response: "Amor não é trabalho, é investimento. E você é o melhor investimento da minha vida."
    },
    {
        id: 66,
        when: "Quando vier a saudade no meio da noite…",
        response: "Pensa que eu também estou sentindo. A saudade é a prova de que estamos conectados."
    },
    {
        id: 67,
        when: "Quando achar que poderia ser mais bonita, mais inteligente, mais tudo…",
        response: "Pare. Você é linda, inteligente e suficiente exatamente como é. Eu não trocaria nada em você."
    },
    {
        id: 68,
        when: "Quando sentir frio na barriga antes de me ver…",
        response: "Que bom que ainda dá frio na barriga. É sinal de que a magia ainda existe."
    },
    {
        id: 69,
        when: "Quando pensar que não sabe lidar com um relacionamento sério…",
        response: "Ninguém sabe. A gente aprende fazendo, errando e acertando juntos. E está dando certo."
    },
    {
        id: 70,
        when: "Se um dia nossos caminhos se separarem…",
        response: "Leve isso pra vida: você foi uma das coisas mais verdadeiras que eu vivi. Meu coração sempre terá o formato que você moldou. Vou torcer, sempre, pela sua felicidade."
    },
    {
        id: 71,
        when: "Quando eu deixar o orgulho falar mais alto que o amor...",
        response: "Me perdoa. Estou aprendendo a abaixar a guarda. Sua presença na minha vida vale mais do que qualquer razão boba que eu queira ter."
    },
    {
        id: 72,
        when: "Quando eu não souber expressar o que sinto direito...",
        response: "Desculpa pela confusão. Meu coração está cheio, mas às vezes as palavras saem tortas. Vou me esforçar mais para ser claro."
    },
    {
        id: 73,
        when: "Quando eu ficar quieto demais e você se sentir distante...",
        response: "Não é falta de amor, é excesso de pensamento. Me cutuca, me traz de volta. Prometo me abrir mais."
    },
    {
        id: 74,
        when: "Quando eu parecer frio sem querer...",
        response: "Não é o que sinto. Às vezes luto com meus demônios e acabo parecindo distante. Estou aqui, sempre estou."
    },
    {
        id: 75,
        when: "Quando eu errar em te entender...",
        response: "Me mostra de novo. Me ensina. Quero ser o aluno mais dedicado na escola do seu coração."
    },
    {
        id: 76,
        when: "Quando minhas piadas passarem do ponto...",
        response: "Me avisa. Nunca quero te machucar, nem de brincadeira. Seu conforto vem primeiro."
    },
    {
        id: 77,
        when: "Quando eu demorar para perceber que você está triste...",
        response: "Estou aprendendo a ler seus silêncios. Me ensina os sinais. Quero estar atento a cada nuance sua."
    },
    {
        id: 78,
        when: "Quando eu for teimoso demais...",
        response: "Estou aprendendo que ter razão não é tão importante quanto ter você. Me ajuda a soltar o que não importa."
    },
    {
        id: 79,
        when: "Quando eu esquecer de algo importante pra você...",
        response: "Me lembra. Quero guardar cada detalhe seu na memória. Suas coisas importantes são minhas prioridades."
    },
    {
        id: 80,
        when: "Quando eu parecer mais focado no celular que em você...",
        response: "Desculpa. Você é minha realidade mais preciosa. Estou aprendendo a deixar o virtual de lado quando estamos juntos."
    },
    {
        id: 81,
        when: "Quando eu não souber lidar com suas emoções mais intensas...",
        response: "Estou aprendendo a navegar seus sentimentos. Não desista de mim. Vou aprender a te acolher do jeito que você precisa."
    },
    {
        id: 82,
        when: "Quando eu disser algo que te magoou...",
        response: "Me conta. Quero reparar, aprender, crescer. Sua dor importa mais do que qualquer palavra que eu tenha dito."
    },
    {
        id: 83,
        when: "Quando eu for impaciente...",
        response: "Estou aprendendo que amor tem seu próprio ritmo. Me ajuda a esperar, a entender, a respeitar seu tempo."
    },
    {
        id: 84,
        when: "Quando eu projetar minhas inseguranças em você...",
        response: "São minhas questões, não suas. Estou trabalhando nelas. Não deixe que meus fantasmas atrapalhem nosso amor."
    },
    {
        id: 85,
        when: "Quando eu não valorizar um gesto seu...",
        response: "Me mostra o valor. Cada ato seu é importante. Quero celebrar cada cuidado, cada demonstração de amor."
    },
    {
        id: 86,
        when: "Quando eu parecer distraído com seus planos...",
        response: "Me envolve de novo. Seus sonhos são meus sonhos. Quero estar presente em cada projeto seu."
    },
    {
        id: 87,
        when: "Quando eu não priorizar nosso tempo juntos...",
        response: "Estou reorganizando minhas prioridades. Você está no topo da lista. Nosso tempo é sagrado."
    },
    {
        id: 88,
        when: "Quando eu não perceber que preciso mudar algo...",
        response: "Me aponta as mudanças necessárias. Quero ser melhor por você, para você, com você."
    },
    {
        id: 89,
        when: "Quando eu parecer fechado para feedback...",
        response: "Estou aprendendo a ouvir. Suas observações são presentes que me fazem crescer. Continue me ensinando."
    },
    {
        id: 90,
        when: "Quando eu esquecer de perguntar como foi seu dia...",
        response: "Me cobra. Quero saber cada detalhe, cada emoção. Seu dia importa profundamente para mim."
    },
    {
        id: 91,
        when: "Quando eu não for romântico o suficiente...",
        response: "Me lembra do que você gosta. Quero surpreender você, fazer você se sentir amada todos os dias."
    },
    {
        id: 92,
        when: "Quando eu demorar para me desculpar...",
        response: "Estou aprendendo que um 'sinto muito' rápido vale mais que um 'te amo' atrasado. Meu orgulho não vale seu sorriso."
    },
    {
        id: 93,
        when: "Quando eu parecer dando por garantido nosso amor...",
        response: "Nada é garantido. Escolho você todos os dias. Vou demonstrar mais, celebrar mais, agradecer mais."
    },
    {
        id: 94,
        when: "Quando eu não cuidar bem de mim e isso te preocupar...",
        response: "Vou cuidar melhor. Meu bem-estar importa para nosso nós. Prometo ser mais responsável com minha saúde."
    },
    {
        id: 95,
        when: "Quando eu não souber equilibrar trabalho e nós...",
        response: "Estou aprendendo a dosar. Você é meu porto seguro, não minha distração. Vou encontrar o equilíbrio."
    },
    {
        id: 96,
        when: "Quando eu parecer menos atento aos seus sentimentos...",
        response: "Estou aqui, presente. Me traz de volta quando eu divagar. Seu coração é meu ponto de referência."
    },
    {
        id: 97,
        when: "Quando eu não celebrar suas pequenas vitórias...",
        response: "Me conta cada conquista. Quero ser seu maior torcedor. Cada passo seu merece comemoração."
    },
    {
        id: 98,
        when: "Quando eu não for compreensivo com seus altos e baixos...",
        response: "Estou aprendendo que amor é estar presente em todas as fases. Nos dias ruins, vou segurar sua mão mais forte."
    },
    {
        id: 99,
        when: "Quando eu parecer esquecendo os detalhes que você ama...",
        response: "Me refresca a memória. Quero decorar cada preferência sua. Você merece ser amada do seu jeito especial."
    },
    {
        id: 100,
        when: "Se algum dia eu te magoei profundamente...",
        response: "Me dê a chance de reparar. De aprender. Meu amor por você é maior que qualquer erro. Vou lutar todos os dias para ser o homem que você merece, e construir com você um amor que cura, entende e perdoa."
    },
    {
        id: 101,
        when: "Quando a sombra daquela amiga do passado voltar a assombrar...",
        response: "Eu errei ao não deixar claro onde você está no meu presente. Cortei o que não respeita nosso relacionamento. Sua segurança é minha prioridade, e minhas ações vão provar isso."
    },
    {
        id: 102,
        when: "Quando minha demora para responder soar como desinteresse...",
        response: "Não é descaso. Às vezes, o cansaço fala mais alto, mas vou me esforçar para me comunicar melhor. Você merece saber que, mesmo exausto, você é importante."
    },
    {
        id: 103,
        when: "Quando minhas palavras saírem duras e impulsivas...",
        response: "Me perdoe. A raiva nunca deve ferir quem amo. Vou aprender a expressar minha frustração sem machucar você. Sua sensibilidade é sagrada."
    },
    {
        id: 104,
        when: "Quando eu justificar demais e você se cansar...",
        response: "Ouço mais, falo menos. Seu cansaço é um sinal para eu parar e acolher. Desculpe por sobrecarregar você com explicações."
    },
    {
        id: 105,
        when: "Quando o medo da traição surgir por falta de transparência...",
        response: "Prometo ser um livro aberto. Você pode perguntar qualquer coisa, e vou responder com honestidade. Nossa confiança vale mais que segredos."
    },
    {
        id: 106,
        when: "Se um dia você olhar pra trás, pensando em tudo...",
        response: "Lembre-se: Sou um homem que, mesmo tropeçando nas próprias palavras e imperfeições, sempre escolheu lutar por você. E enquanto houver ar no meu peito, ele vai pronunciar o seu nome."
    },
    {
        id: 107,
        when: "Quando uma discussão escalar rápido por estarmos exaustos...",
        response: "Vamos respirar juntos. Às vezes, uma pausa evita palavras que doem. Eu te amo, mesmo na discordância, e vou cuidar para não deixar a emoção falar por nós."
    },
    {
        id: 108,
        when: "Quando o fantasma dos nossos ex-relacionamentos aparecer...",
        response: "Não há comparação. Você é única, e o que construímos é especial. Vamos focar no nosso agora, que é lindo e só nosso."
    },
    {
        id: 109,
        when: "Quando você sentir que não há limites claros com meu passado...",
        response: "Estabeleci limites definitivos. Nada e ninguém vêm antes do seu bem-estar. Você pode confiar em mim, e vou reforçar isso com ações."
    },
    {
        id: 110,
        when: "Quando minha falta de timing ferir seu momento...",
        response: "Desculpe por não estar presente quando você precisava. Vou me organizar para priorizar nossos momentos, porque eles são sagrados."
    },
    {
        id: 111,
        when: "Quando minhas ameaças de ir embora ecoarem na sua mente...",
        response: "Foi imaturo e impulsivo. Não quero ir a lugar nenhum sem você. Nosso lar é aqui, juntos, e vou lutar para construí-lo com segurança."
    },
    {
        id: 112,
        when: "Quando você duvidar do meu compromisso por insegurança...",
        response: "Escolho você todos os dias. Minhas ações vão mostrar que meu coração é seu. Você não é opção, é certeza."
    },
    {
        id: 113,
        when: "Quando a forma como falei pesar mais que o conteúdo...",
        response: "A mensagem se perdeu no tom. Peço desculpas pelo jeito. Vou buscar ser gentil, mesmo nas dificuldades, porque você merece respeito sempre."
    },
    {
        id: 114,
        when: "Quando você pedir espaço e eu parecer não entender...",
        response: "Respeito seu tempo. O espaço que você precisa é também para eu refletir e me tornar melhor. Estarei aqui, com paciência e amor."
    },
    {
        id: 115,
        when: "Quando a desconfiança minar nosso chão...",
        response: "Vou reconstruir a confiança com transparência e constância. Você é preciosa demais para se sentir insegura. Me mostra o caminho, e eu sigo."
    }
];






    // Configurações - AUMENTADO PARA 30 SEGUNDOS
    const AUTO_ADVANCE_DELAY = 30000; // 30 segundos
    let currentQuantoIndex = 0;
    let autoPlayInterval = null;

    // Inicialização específica para a página "quando"
    document.addEventListener('DOMContentLoaded', () => {
        initQuantoPage();
    });

    // Função de inicialização
    function initQuantoPage() {
        renderQuantoCards();
        showQuantoCard(currentQuantoIndex);
        startAutoPlay();
        setupQuantoEventListeners();
        console.log('Página "Quando..." inicializada com ' + quandoMessages.length + ' mensagens');
    }

    // Renderizar cards
    function renderQuantoCards() {
        const wrapper = document.getElementById('quandoWrapper');
        if (!wrapper) {
            console.error('Elemento quandoWrapper não encontrado!');
            return;
        }
        
        // Limpa qualquer conteúdo existente
        wrapper.innerHTML = '';
        
        quandoMessages.forEach((message, index) => {
            const card = document.createElement('div');
            card.className = 'quando-card';
            card.id = `quando-card-${index}`;
            card.setAttribute('data-index', index);
            
            card.innerHTML = `
                <div class="card-question">${message.when}</div>
                <div class="card-answer">${message.response}</div>
                <div class="card-counter">
                    <span class="counter">${message.id} / ${quandoMessages.length}</span>
                </div>
            `;
            
            // Adiciona evento de clique para efeito vermelho
            card.addEventListener('click', function() {
                // Efeito visual de clique
                this.style.transform = 'scale(1.02)';
                this.style.borderColor = '#ff4d88';
                
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.borderColor = '';
                }, 300);
                
                // Avança para o próximo card
                nextQuantoCard();
            });
            
            wrapper.appendChild(card);
        });
        
        console.log(quandoMessages.length + ' cards renderizados');
    }

    // Mostrar card específico
    function showQuantoCard(index) {
        // Validação do índice
        if (index < 0) index = quandoMessages.length - 1;
        if (index >= quandoMessages.length) index = 0;
        
        currentQuantoIndex = index;
        
        console.log('Mostrando card ' + (currentQuantoIndex + 1));
        
        // Remove classes de todos os cards
        document.querySelectorAll('.quando-card').forEach(card => {
            card.classList.remove('active', 'prev', 'next');
        });
        
        // Obtém referências aos cards atual, anterior e próximo
        const currentCard = document.getElementById(`quando-card-${currentQuantoIndex}`);
        const prevIndex = (currentQuantoIndex - 1 + quandoMessages.length) % quandoMessages.length;
        const nextIndex = (currentQuantoIndex + 1) % quandoMessages.length;
        
        const prevCard = document.getElementById(`quando-card-${prevIndex}`);
        const nextCard = document.getElementById(`quando-card-${nextIndex}`);
        
        // Aplica classes para animação
        if (currentCard) currentCard.classList.add('active');
        if (prevCard) prevCard.classList.add('prev');
        if (nextCard) nextCard.classList.add('next');
    }

    // Próximo card
    function nextQuantoCard() {
        showQuantoCard(currentQuantoIndex + 1);
        resetAutoPlay();
    }

    // Card anterior
    function prevQuantoCard() {
        showQuantoCard(currentQuantoIndex - 1);
        resetAutoPlay();
    }

    // Iniciar reprodução automática
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        
        autoPlayInterval = setInterval(() => {
            nextQuantoCard();
        }, AUTO_ADVANCE_DELAY);
        
        console.log('Auto-play iniciado (mudança a cada ' + (AUTO_ADVANCE_DELAY/1000) + ' segundos)');
    }

    // Reiniciar reprodução automática
    function resetAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
        
        // Reinicia após um curto delay
        setTimeout(() => {
            startAutoPlay();
        }, 100);
    }

    // Configurar event listeners
    function setupQuantoEventListeners() {
        // Conectar todas as setas à mesma funcionalidade
        const prevBtns = [
            document.getElementById('prevBtnLeft'),
            document.getElementById('prevBtnBottom')
        ];
        
        const nextBtns = [
            document.getElementById('nextBtnRight'),
            document.getElementById('nextBtnBottom')
        ];
        
        const wrapper = document.getElementById('quandoWrapper');
        
        if (!prevBtns[0] || !nextBtns[0] || !wrapper) {
            console.error('Elementos de controle não encontrados!');
            return;
        }
        
        // Navegação por botões (todas as setas)
        prevBtns.forEach(btn => {
            if (btn) btn.addEventListener('click', prevQuantoCard);
        });
        
        nextBtns.forEach(btn => {
            if (btn) btn.addEventListener('click', nextQuantoCard);
        });
        
        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    prevQuantoCard();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextQuantoCard();
                    break;
                case ' ':
                case 'Spacebar':
                    e.preventDefault();
                    // Pausar/retomar autoplay com espaço
                    if (autoPlayInterval) {
                        clearInterval(autoPlayInterval);
                        autoPlayInterval = null;
                        console.log('Auto-play pausado');
                    } else {
                        startAutoPlay();
                    }
                    break;
            }
        });
        
        // Suporte a touch/swipe
        let touchStartX = 0;
        let touchEndX = 0;
        
        wrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        wrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });
        
        // Processar gesto de swipe
        function handleSwipeGesture() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextQuantoCard();
                } else {
                    prevQuantoCard();
                }
            }
        }
        
        console.log('Event listeners configurados para todas as setas');
    }
}


