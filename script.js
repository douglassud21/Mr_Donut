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
