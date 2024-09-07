document.querySelectorAll('.work__card').forEach(card => {
    card.addEventListener('mouseover', () => {
        document.querySelectorAll('.work__card').forEach(c => {
            if (c !== card) {
                c.classList.add('inactive');
            }
        });
    });

    card.addEventListener('mouseout', () => {
        document.querySelectorAll('.work__card').forEach(c => {
            c.classList.remove('inactive');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".home__container span");
    
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const increment = target / 200;
                let currentValue = 0;
                
                const updateCounter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= target) {
                        currentValue = target;
                        clearInterval(updateCounter);
                    }
                    counter.textContent = Math.round(currentValue).toLocaleString();
                }, 25);
            } else {
                entry.target.textContent = "0"; // Reseta para 0 quando não estiver visível
            }
        });
    }, options);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});


const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Compensa o valor de rolagem da página
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Criar a mini bolinha
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${mouseX}px`;
    trail.style.top = `${mouseY}px`;
    document.body.appendChild(trail);

    // Remover a mini bolinha após a animação
    setTimeout(() => {
        trail.remove();
    }, 500);
});


const numBubbles = 50; // Número de bolinhas (aumentado para mais cobertura)
        const bubbles = [];

        // Função para gerar bolinhas
        function createBubbles() {
            for (let i = 0; i < numBubbles; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');

                const size = Math.random() * 20 + 5; // Bolinhas pequenas, entre 5 e 25px
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;

                // Posição inicial aleatória em todo o documento
                bubble.style.left = `${Math.random() * 100}vw`;
                bubble.style.top = `${Math.random() * document.documentElement.scrollHeight}px`;

                // Velocidade de animação aleatória
                bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;

                document.body.appendChild(bubble);
                bubbles.push(bubble);
            }
        }

        // Função para mover as bolinhas quando o scroll estiver perto
        function moveBubbles() {
            const scrollPos = window.scrollY + window.innerHeight;

            bubbles.forEach(bubble => {
                const bubblePos = bubble.getBoundingClientRect().top + window.scrollY;

                // Se o scroll estiver perto da bolinha, mova-a para longe
                if (Math.abs(scrollPos - bubblePos) < 150) {
                    bubble.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
                }
            });
        }

        // Criar as bolinhas na inicialização
        createBubbles();

        // Adicionar listener para o scroll
        window.addEventListener('scroll', moveBubbles);


document.getElementById('openModalButton').addEventListener('click', function() {
    document.getElementById('openModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('openModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


