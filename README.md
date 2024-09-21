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