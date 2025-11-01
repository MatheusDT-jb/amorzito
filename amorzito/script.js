// Mensagens interativas
const messages = {
    love: "Te amo porque você ilumina por onde passa, ao mesmo tempo que me zoa, que ri desesperadamente da minha cara quando faz uma piada muito idiota, ainda consegue me encantar com esta delicadeza e amor imensuraveis, isso que me faz te amar e te admirar. ❤️",
    
    memories: "Este ano, pensar que a 2 anos atrás nem nos meus sonhos mais absurdos eu não imaginava que a vida poderia ser boa como você fez ela ser, nunca pensei que poderia ser tão feliz como sou hoje com você. 😁",
    
    future: "Quando penso no nosso futuro, a única coisa que eu quero é desbravar esse enorme mundo ao lado do meu grande amor. Te amo pra sempre florzinha 💕"
};

const photoMessages = [
    "Um dia tão especial 😍",
    " 🦈 ",
    "Que sorte a minha de ter você nessa viagem! ✨",
    "Tantas lembranças 🥰"
];

// Variável para guardar o timeout da mensagem ativa
let activePhotoTimeout = null;

// 10 mensagens especiais, uma para cada foto
const specialPhotos = [
    {
        photo: "fotos_random/foto1.jpg",
        title: "💕 Nosso Primeiro Momento",
        message: "Lembro como se fosse ontem, o dia que pude finalmente ter o amor da minha vida ao meu lado, de poder compartilhar da vida com você. Te amo princesinha ❤️"
    },
    {
        photo: "fotos_random/foto2.jpg",
        title: "🌟 Risadas Compartilhadas",
        message: "Um momento tão simples, tão besta e é justamente isso que torna cada dia com você mais prazerosoa, a sua risada colore o meu dia e encanta os meus olhos 😊"
    },
    {
        photo: "fotos_random/foto3.jpg",
        title: "🎸 Aventuras Juntos",
        message: "Uma realização de um sonho! Muita gritaria, bagunça e o coração gritando. \n 'And if you go, I wanna go with you \n And if you die, I wanna die with you \n Take your hand and walk away'"
    },
    {
        photo: "fotos_random/foto4.jpg",
        title: "💖 Olhar que Encanta",
        message: "Esse olhar 🥰"
    },
    {
        photo: "fotos_random/foto5.jpg",
        title: "🌸 Delicadeza e Amor",
        message: "O carinho e delicadeza em cada gesto, fala ou pensamento me fazem me apaixonar mais ainda por você 💝"
    },
    {
        photo: "fotos_random/foto6.jpg",
        title: "✨ Momentos Mágicos",
        message: "Este foi um dos momentos que eu pensei 'nossa, essa é a mulher da minha vida'"
    },
    {
        photo: "fotos_random/foto7.jpg",
        title: "🎉 Celebrando o Amor",
        message: "Um dos nossos primeiros encontros, me lembro até hoje, um dos dias que mais me fez feliz ❤️"
    },
    {
        photo: "fotos_random/foto8.jpg",
        title: "💑 Cumplicidade",
        message: "Neste dia, a unica coisa que passava na minha mente era 'como eu sou sortudo por ter você ao meu lado' 🥰"
    },
    {
        photo: "fotos_random/foto9.jpg",
        title: "🌹 Amor Verdadeiro",
        message: "Miau"
    },
    {
        photo: "fotos_random/foto10.jpg",
        title: "🎈 Nosso Futuro",
        message: "Quando eu te vejo usando as roupas que gosta, sendo você mesma, fico feliz de estar aqui desde o começo vendo esta linda mulher que você esta se tornando 🥰"
    }
];

function showMessage(type) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    
    messageText.textContent = messages[type];
    
    messageBox.classList.remove('show');
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 100);
}

function showPhotoMessage(photoNumber) {
    console.log('Clicou na foto:', photoNumber);
    
    // Limpa o timeout anterior se existir
    if (activePhotoTimeout) {
        clearTimeout(activePhotoTimeout);
    }
    
    // Esconde todas as mensagens de fotos e remove a classe has-message
    for (let i = 1; i <= 4; i++) {
        const msg = document.getElementById(`photoMessage${i}`);
        const container = msg.parentElement;
        if (msg) {
            msg.classList.remove('show');
        }
        if (container) {
            container.classList.remove('has-message');
        }
    }
    
    // Mostra a mensagem da foto clicada
    const messageBox = document.getElementById(`photoMessage${photoNumber}`);
    const container = messageBox.parentElement;
    const messageText = messageBox.querySelector('p');
    
    console.log('Elemento encontrado:', messageBox);
    console.log('Mensagem:', photoMessages[photoNumber - 1]);
    
    messageText.textContent = photoMessages[photoNumber - 1];
    
    // Pequeno delay para animação
    setTimeout(() => {
        messageBox.classList.add('show');
        container.classList.add('has-message');
        console.log('Classe "show" adicionada');
    }, 50);
    
    // Define timeout para esconder após 1 minuto (60000ms)
    activePhotoTimeout = setTimeout(() => {
        messageBox.classList.remove('show');
        container.classList.remove('has-message');
        console.log('Mensagem escondida após 1 minuto');
    }, 60000);
}

function showSpecialMessage() {
    // Seleciona uma foto aleatória
    const randomIndex = Math.floor(Math.random() * specialPhotos.length);
    const selectedPhoto = specialPhotos[randomIndex];
    
    // Atualiza os elementos do modal
    const modal = document.getElementById('specialModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = selectedPhoto.title;
    modalPhoto.src = selectedPhoto.photo;
    modalPhoto.alt = selectedPhoto.title;
    modalMessage.innerHTML = `<strong style="color: #333; font-size: 1.1em; line-height: 1.8;">${selectedPhoto.message}</strong>`;
    
    // Mostra o modal
    modal.classList.add('show');
}

function closeModal(event) {
    const modal = document.getElementById('specialModal');
    modal.classList.remove('show');
}

// Animação de entrada suave
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});