document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.web__btn');
  const contents = document.querySelectorAll('.web__content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      // Atualiza o estado dos botões (ativa o botão selecionado)
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Atualiza o conteúdo visível
      contents.forEach(content => {
        if (content !== targetContent) {
          content.classList.remove('active');
          content.style.display = 'none'; // Esconde o conteúdo após a animação
        }
      });

      // Exibe e anima o novo conteúdo
      targetContent.style.display = 'block'; // Exibe o conteúdo antes de aplicar a animação
      setTimeout(() => {
        targetContent.classList.add('active');
      }, 10); // Pequeno delay para permitir o reflow antes de adicionar a classe
    });
  });

  // Ativa a primeira opção ao carregar a página
  buttons[0].click();

  // Para cada slider na página
  const sliders = document.querySelectorAll('.web__slider');

  sliders.forEach(slider => {
    const container = slider.querySelector('.web__slider__container');
    const cards = slider.querySelectorAll('.web__card');
    const btnPrev = slider.querySelector('.web__slider__btn--prev');
    const btnNext = slider.querySelector('.web__slider__btn--next');

    let index = 0;

    function updateSlider() {
      container.style.transform = `translateX(${-index * 100}%)`;
    }

    btnNext.addEventListener('click', () => {
      if (index < cards.length - 1) {
        index++;
        updateSlider();
      }
    });

    btnPrev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });

    // Handle swipe events with Hammer.js
    const hammer = new Hammer(container);
    hammer.get('swipe').set({ threshold: 50 });

    hammer.on('swipeleft', () => {
      if (index < cards.length - 1) {
        index++;
        updateSlider();
      }
    });

    hammer.on('swiperight', () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });

    // Handle pan events with Hammer.js
    hammer.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    let startX;

    hammer.on('panstart', (e) => {
      startX = e.center.x;
    });

    hammer.on('panend', (e) => {
      const endX = e.center.x;
      const distance = startX - endX;

      if (Math.abs(distance) > 100) {
        if (distance > 0) {
          btnNext.click(); // Drag left
        } else {
          btnPrev.click(); // Drag right
        }
      }
    });
  });
});
