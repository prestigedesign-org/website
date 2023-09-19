const video = document.querySelector('.video-file');
const playButton = document.querySelector('.fa-circle-play');
const videoCover = document.querySelector('.video-cover');
const stopButton = document.querySelector('.fa-stop');

playButton.addEventListener('click', function () {
    const videoSource = 'resources/videos/introduction.mp4';
    video.src = videoSource;
    video.load(); // Load the video source
    video.play(); // Play the video
    playButton.style.display = 'none'; // Hide the play button
    // videoCover.style.display = 'none'; // Hide the video cover
    // stopButton.style.display = 'block'; // Show the stop button
});

// stopButton.addEventListener('click', function () {
//     video.pause(); // Pause the video
//     video.currentTime = 0; // Reset the video to the beginning
//     stopButton.style.display = 'none'; // Hide the stop button
//     playButton.style.display = 'block'; // Show the play button
//     videoCover.style.display = 'block'; // Show the video cover
// });

video.addEventListener('pause', function () {
    playButton.style.display = 'block'; // Show the play button
    // videoCover.style.display = 'block'; // Show the video cover
});

video.addEventListener('play', function () {
    playButton.style.display = 'none'; // Hide the play button
    // videoCover.style.display = 'none'; // Hide the video cover
});

video.addEventListener('playing', function () {
    // videoCover.style.display = 'none'; // Hide the video cover
});

video.addEventListener('ended', function () {
    video.currentTime = 0; // Reset the video to the beginning
    stopButton.style.display = 'none'; // Hide the stop button
    playButton.style.display = 'block'; // Show the play button
    videoCover.style.display = 'block'; // Show the video cover
});
