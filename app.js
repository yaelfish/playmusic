(function() {  

    window.addEventListener('keydown', playSound);
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return; // Stop if the letter presses is not connected to a sound
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // Skip if it's not a transform
        console.log(e.propertyName);
        this.classList.remove('playing');
    }

})();
