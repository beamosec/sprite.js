var sounded = new buzz.sound("/audio/Alluptoyou.mp3") {
    preload: true,
    autoplay: false,
    loop: false,
    webAudioApi: true
}

function testSound() {
    sounded.play();
}