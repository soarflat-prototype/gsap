import { TweenMax } from 'gsap';
import velocity from 'velocity-animate';

var topClipRightP = document.getElementById('topClipRightP');
var topClipLeftP = document.getElementById('topClipLeftP');

velocity(topClipLeftP, {
  translateX: [0, '100%'],
  translateY: [0, '100%']
}, {
  delay: 1000,
  duration: 300
});

TweenMax.fromTo(topClipRightP, 0.5, {
  attr: {
    transform: 'translate(100,100)'
  }
}, {
  attr: {
    transform: 'translate(0,0)'
  }
});

// TweenMax.from(topClipLeftP, 0.3, {
//   attr: {
//     points: '-200,335 175,620 -200,910'
//   }
// });