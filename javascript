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
// 增加状态诊断日志 
function togglePlay() {
    console.log(' 当前音频状态:', audio.paused  ? '暂停' : '播放');
    console.log(' 旋转容器:', cover.parentElement); 
    // ...原有逻辑保持 
}
