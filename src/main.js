import { TweenMax } from 'gsap';
import velocity from 'velocity-animate';

const triangle = document.getElementById('triangle');

velocity(triangle, {
  translateX: [0, 300]
}, {
  duration: 300
});

TweenMax.fromTo("#triangle2", 0.5, {
  x: 200,
  y: 200,
}, {
  x: 0,
  y: 0,
});

TweenMax.fromTo("#triangle3", 0.5, {
  attr: {
    points: '380,0 380,380 190,190'
  }
}, {
  attr: {
    points: '0,0 0,380 190,190'
  }
});
