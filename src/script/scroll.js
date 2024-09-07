document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.getElementById('typing-text');
  const siteContent = document.getElementById('site-content');
  const preloader = document.getElementById('preloader');
  const text = "< seja bem vindo (a)! 😉 />";
  let index = 0;

  // Função para simular a digitação do texto
  function typeWriter() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Velocidade de digitação
    } else {
      setTimeout(hidePreloader, 600); // Tempo para esconder o preloader
    }
  }

  // Função para esconder o preloader e mostrar o site
  function hidePreloader() {
    preloader.style.display = 'none';
    siteContent.style.display = 'block';
    siteContent.classList.add('animate-in');
  }

  // Iniciar a animação de digitação
  typeWriter();
});

document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate');

  // Adicionar um atraso para inicializar as animações após o preloader desaparecer
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.05 });

    animateElements.forEach(element => {
      observer.observe(element);
    });
  }, 1500); // Ajuste o tempo aqui para corresponder ao término do preloader
});


  function scrollToWork(){
    document.querySelector('#work').scrollIntoView({
      behavior: 'smooth'
    })
  }

document.getElementById('scroll-to-work').addEventListener('click', scrollToWork);

document.querySelector('.scroll-to-work-down').addEventListener('click', function() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
});

// Função para rolar suavemente para a seção #web
function scrollToWeb() {
    document.querySelector('#web').scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav__links ul");
    
    // Seletor para todos os elementos com IDs correspondentes
    const observeElements = navLinks.map(link => document.querySelector(`#${link.id}`)).filter(element => element !== null);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.toggle("active", link.id === id && entry.isIntersecting);
            });
        });
    }, { threshold: 0.5 }); // Ajuste o threshold conforme necessário

    observeElements.forEach(element => {
        observer.observe(element);
    });
});


// Adiciona o evento de clique ao botão
document.getElementById('scroll-to-web').addEventListener('click', scrollToWeb);

// Adiciona o evento de clique ao ícone
document.querySelector('.home__down').addEventListener('click', scrollToWeb);


