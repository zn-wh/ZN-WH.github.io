// scripts.js 
const audioPlayer = document.getElementById('audio-player'); 
const playButton = document.createElement('button'); 
playButton.textContent  = '播放';
playButton.style.margin  = '10px';
playButton.addEventListener('click',  () => {
    if (audioPlayer.paused)  {
        audioPlayer.play(); 
        playButton.textContent  = '暂停';
    } else {
        audioPlayer.pause(); 
        playButton.textContent  = '播放';
    }
});

// 将播放按钮添加到播放器容器
const playerContainer = document.querySelector('.player-container'); 
playerContainer.insertBefore(playButton,  audioPlayer);

// 更新播放状态
audioPlayer.addEventListener('play',  () => {
    playButton.textContent  = '暂停';
});

audioPlayer.addEventListener('pause',  () => {
    playButton.textContent  = '播放';
});
