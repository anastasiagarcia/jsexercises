
function stopAudio(note) {
  note.pause();
  note.currentTime = 0;
}

function processChar(character) {
  let note = document.querySelectorAll("audio[data-note=" + character + "]");
  if (note.length === 0) {
    let charKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let rand = Math.floor(Math.random() * charKeys.length);
    character = charKeys[rand];
    note = document.querySelectorAll("audio[data-note=" + character + "]");
  }
  stopAudio(note[0]);
  note[0].play();

  let color = document.querySelectorAll(".note[data-note=" + character + ']');
  color[0].style.backgroundColor = "red";

  note[0].onended = function () {
    color[0].style.backgroundColor = "darkgrey";
  };

}


function playNote(event) {
  let unicodeChar = event.which || event.keyCode;
  let character = String.fromCharCode(unicodeChar);
  character = character.toLowerCase();
  processChar(character);



}
