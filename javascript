const audio = document.getElementById('audio'); 
const cover = document.getElementById('cover'); 

function togglePlay() {
    if (audio.paused)  {
        audio.play(); 
        cover.parentElement.style.animationPlayState  = 'running';
    } else {
        audio.pause(); 
        cover.parentElement.style.animationPlayState  = 'paused';
    }
}

// 音频结束时停止旋转
audio.addEventListener('ended',  () => {
    cover.parentElement.style.animationPlayState  = 'paused';
});
