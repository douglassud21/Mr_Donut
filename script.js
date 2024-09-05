const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1.addEventListener('ended', () => {
    video1.style.display = 'none';  // Esconde o primeiro vídeo
    video2.style.display = 'block';  // Mostra o segundo vídeo
    video2.play();  // Inicia o segundo vídeo
});

video2.addEventListener('ended', () => {
    video2.style.display = 'none';  // Esconde o segundo vídeo
    video1.style.display = 'block';  // Mostra o primeiro vídeo novamente
    video1.play();  // Reproduz o primeiro vídeo novamente
});



// Seleciona o menu hambúrguer e o menu mobile
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Adiciona um evento de clique ao menu hambúrguer
hamburger.addEventListener('click', () => {
  // Alterna a classe 'active' no menu hambúrguer
  hamburger.classList.toggle('active');
  // Alterna a classe 'active' no menu mobile
  mobileMenu.classList.toggle('active');
});

// Seleciona todas as opções do menu mobile
const menuLinks = document.querySelectorAll('.mobile-menu a');

// Adiciona um evento de clique a cada opção do menu
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' do menu hambúrguer e do menu mobile
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

