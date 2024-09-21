const playBtn = document.querySelector('#playBtn')
const playPauseCon = document.querySelector('#playPauseCon')
const song = document.querySelector('#song')
const progress = document.querySelector('#progress')

song.onplay = function () {
    progress.max = song.duration
    progress.value = song.currentVTime
}

playPauseCon.onclick = playPauseFunc 

function playPauseFunc() {
    if (playBtn.classList.contains('fa-play')) {
        song.play()
        playBtn.classList.add('fa-pause')
        playBtn.classList.remove('fa-play')
    } else {
        song.pause()
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
    }
}

if (song.play) {
    setInterval(() => {
       progress.value = song.currentTime
    }, 500)
}

progress.oninput = function() {
    song.currentTime = progress.value
}

document.addEventListener('keydown', (e) => {
    if(e.code === 'Space') {
        playPauseFunc()
    }
})