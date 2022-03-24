
fetch('audio.json')
    .then(res => res.json())
    .then(data => {
        data.forEach((item: any) => {
            let btnAudio = document.createElement("button")
            let audio: any = document.getElementById('audio')
            audio.prepend(btnAudio)
            btnAudio.innerHTML = item.nome_audio
            btnAudio.addEventListener("click", function () {
                let currentAudio = document.querySelector("audio > source")
                if (currentAudio) {
                    currentAudio.remove()
                }
                let audioSource = document.createElement('source')
                let playerAudio: any = document.getElementById('player_audio')
                playerAudio.append(audioSource)
                audioSource.setAttribute('src', "audio/" + item.percorso_audio)
                playerAudio.load()
                playerAudio.play()
            })
        })
    })

fetch('video.json')
    .then(res => res.json())
    .then(data => {
        data.forEach((item: any) => {
            let btnVideo = document.createElement("button")
            let video: any = document.getElementById('video')
            video.prepend(btnVideo)
            btnVideo.innerHTML = item.nome_video
            btnVideo.addEventListener("click", function () {
                let currentVideo = document.querySelector("video > source")
                if (currentVideo) {
                    currentVideo.remove()
                }
                let videoSource = document.createElement('source')
                let playerVideo: any = document.getElementById('player_video')
                playerVideo.append(videoSource)
                videoSource.setAttribute('src', "video/" + item.percorso_video)
                playerVideo.load()
                playerVideo.play()
            })
        })
    })
