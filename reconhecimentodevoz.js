const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventlistener('result', onSpeak)

  function onSpeak(e) {
    console.log(e.results[0][0].transcript)
  }

  function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
  }

  function exibeChuteNaTela(chute) {
elemtentoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
`
}