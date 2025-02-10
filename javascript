const audioPlayer = document.getElementById('audio-player'); 
const cover = document.getElementById('cover'); 

// 自动旋转控制
audioPlayer.addEventListener('play',  () => {
    cover.classList.add('playing'); 
});

audioPlayer.addEventListener('pause',  () => {
    cover.classList.remove('playing'); 
});

// 设备类型检测
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent); 
}

// 移动端优化处理
if (isMobileDevice()) {
    document.body.classList.add('mobile'); 
}
