import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoEL = document.querySelector('#vimeo-player');
const player = new Player(vimeoEL);


const play = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', play);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
