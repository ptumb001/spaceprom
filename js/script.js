particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

anime({
  targets: 'polygon',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: 500,
  direction: 'alternate',
  loop: true
});

anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: 2500
});

anime({
  targets: 'polyline',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 4000,
  delay: 1500
  
});

anime({
  targets: '#moon',
  opacity: 0.75,
  easing: 'easeInOutQuad',
  duration: 1500,
  delay: 3500,
});

anime({
  targets: '#moon',
  translateX: 1000,
  easing: 'easeInOutQuad',
  duration: 60000,
  direction: 'alternate',
  loop: true
});

anime({
  targets: 'h1',
  opacity: 1,
  
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: 5000 
});

anime({
  targets: '.rocket',
  opacity: 0.75,
  easing: 'easeInOutSine',
  duration: 1000,
  delay: 5500
});

anime({
  targets: '.rocket',
  easing: 'easeInOutSine',
  translateY: -200,
  duration: 3000,
  delay: 5500
});
