var horse = new buzz.sound("http://www.w3schools.com/html/horse", {
	formats: ['mp3', 'ogg'], // Add wav?
    preload: true, // Preload when you can.
    loop: false
});

var sounds = {
	"horse": horse
};

function onButtonClick(event) {
	var target = $(event.target);
    var soundToPlay = target.data('sound');

    if (Object.keys(sounds).indexOf(soundToPlay) !== -1) {
        // Object.keys gets the "keys" of the ovject above, in this example, horse. Then it checks if the sound from the button listed is in that availible sound list.
        // If this is true, we play that sound here.
        sounds[soundToPlay].play();
    }
}
