# music_player

**Here I will just write conspects so u can just skip )**

**Audio in HTML**

<audio src="" controls>
    <source src="media/Modjo - Lady (Hear Me Tohight).mp3" type="audio/mpeg">
</audio>

*Tag audio is used to provide audio player in an app, but without atribute control we won't be able to do anything with that audio on app as users*

*We also use tag siurce to point the music's source, we use thet tag if we want to add several audio types, cuz some of the browsers may not support the tag audio or audio's type*


**Removing browsers' styles for range input**

-webkit-appearance: none;

*We use this method if we want tp customize some elements on our own, but they have default customizations by browsers*

**Pointer customization**

#progress::-webkit-slider-thumb 

*We can use this pseudo-elemnt if we want to customize range's pointer*


## JavaScript Code

<!-- 1 -->
**Get all the dom elements u need**

const progress = document.getElementById('progress')
const song = document.getElementById('song')
const playBtn = document.getElementById('playBtn')

<!-- 2 -->
**Add an event listener for audio tag**

song.onloadedmetadata = function() {}

*We use that function that attached to the var, runs when the audio starts playing*

<!-- 3 -->
**Set progress range's maximum value as a sing's duration**

progress.max = song.duration

*progress.max means the max value of the range, or progress bar. song.duration means the duration of an auido that we play in seconds*

<!-- 4 -->
**Attach audio's current time to the range's value**

progress.value = song.currentTime

*progress.value means the value of the range. song.currentTime shows us current time of the song. So if the max value of the range is 300, and the current time of a song is 30, the pointer of range will be at 30/300 * 100 per sent of the whole range*

<!-- 5 -->
**Create a function to play and pause the song**

playPauseCon.onclick = () => playPause() 

function playPause() {
    if(playBtn.classList.contains('fa-pause')) {
        song.pause()
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
    }
}

*That function works every time when we cliick the Play or Pause button. When we click the button and the current button id pause, it means that the song is already playing, therefore, we stop the audio with song.stop()Then we change the pause button into play button.*

else {
    song.play()
    playBtn.classList.add('fa-pause')
    playBtn.classList.remove('fa-play')
}

*If the button is play button, that means that audio is not playing, so we have to play it and change the button*

<!-- 6 -->
**Attach the range's value to the audio's time**

if(song.play) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

*That block runs if the song is playing. What does setInterval do?*

*setInterval is a function, that runs another function in a certain period of time. In  the first parametr we set the function we want to run, in the second, the time interval in mili seconds*

*In our code the function works every 500 milisecond until the song is playing*

<!-- 7 -->
**Attaching the current time to the range's changes**

progress.onchange = function() {
    song.currentTime = progress.value
}

*We change the song's time every time we change the range*