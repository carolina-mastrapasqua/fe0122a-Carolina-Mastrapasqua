fetch('audio.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var btnAudio = document.createElement("button");
        var audio = document.getElementById('audio');
        audio.prepend(btnAudio);
        btnAudio.innerHTML = item.nome_audio;
        btnAudio.addEventListener("click", function () {
            var currentAudio = document.querySelector("audio > source");
            if (currentAudio) {
                currentAudio.remove();
            }
            var audioSource = document.createElement('source');
            var playerAudio = document.getElementById('player_audio');
            playerAudio.append(audioSource);
            audioSource.setAttribute('src', "audio/" + item.percorso_audio);
            playerAudio.load();
            playerAudio.play();
        });
    });
});
fetch('video.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var btnVideo = document.createElement("button");
        var video = document.getElementById('video');
        video.prepend(btnVideo);
        btnVideo.innerHTML = item.nome_video;
        btnVideo.addEventListener("click", function () {
            var currentVideo = document.querySelector("video > source");
            if (currentVideo) {
                currentVideo.remove();
            }
            var videoSource = document.createElement('source');
            var playerVideo = document.getElementById('player_video');
            playerVideo.append(videoSource);
            videoSource.setAttribute('src', "video/" + item.percorso_video);
            playerVideo.load();
            playerVideo.play();
        });
    });
});
