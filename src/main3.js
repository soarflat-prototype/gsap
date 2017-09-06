import { TweenMax } from 'gsap';
import velocity from 'velocity-animate';

const topClipRightP = document.getElementById('topClipRightP');
const topClipLeftP = document.getElementById('topClipLeftP');
//
// velocity(topClipRightP, {
//   translateX: [0, '100%'],
//   translateY: [0, '100%']
// }, {
//   duration: 300
// });

TweenMax.fromTo(topClipRightP, 0.5, {
  attr: {
    transform: 'translate(100,100)'
  }
}, {
  attr: {
    transform: 'translate(0,0)'
  }
});

TweenMax.from(topClipLeftP, 0.3, {
  attr: {
    points: '-200,335 175,620 -200,910'
  }
});