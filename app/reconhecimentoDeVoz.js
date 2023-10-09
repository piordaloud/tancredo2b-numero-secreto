window.SpeechRecognition = window.SpeechRecognition ||

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEvenlistener('result', onSpeak)

function onSpeak(e) {
    chute = e. results [0] [0].transcript
