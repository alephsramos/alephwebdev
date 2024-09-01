document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.1 }); // Ajuste o valor do threshold conforme necessário
  
    animateElements.forEach(element => {
      observer.observe(element);
    });
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


