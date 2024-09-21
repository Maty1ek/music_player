const progress = document.getElementById('progress')
const song = document.getElementById('song')
const playBtn = document.getElementById('playBtn')
const playPauseCon = document.getElementById('playPauseCon')

// console.log(progress);

song.onloadedmetadata = function() {
    progress.max = song.duration
    progress.value = song.currentTime
    
}

playPauseCon.onclick = () => playPause() 

function playPause() {
    if(playBtn.classList.contains('fa-pause')) {
        song.pause()
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
    } else {
        song.play()
        playBtn.classList.add('fa-pause')
        playBtn.classList.remove('fa-play')
    }
}

if(song.play) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

progress.onchange = function() {
    song.currentTime = progress.value
}