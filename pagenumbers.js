const video = document.querySelector('#myVideo');

video.addEventListener('click', () => {
  // tüm videoların durdurulması
  const otherVideos = document.querySelectorAll('.video');
  otherVideos.forEach((otherVideo) => {
    if (otherVideo !== video) {
      otherVideo.pause();
    }
  });
  
  // seçilen videonun oynatılması
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

const video = document.querySelector('#myVideo2');

video.addEventListener('click', () => {
  // tüm videoların durdurulması
  const otherVideos = document.querySelectorAll('.video');
  otherVideos.forEach((otherVideo) => {
    if (otherVideo !== video) {
      otherVideo.pause();
    }
  });
  
  // seçilen videonun oynatılması
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
