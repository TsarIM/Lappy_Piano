const white_keys = ['a','s','d','f','g','h','j',  'k','l',';','n','m',',','.']
const black_keys = ['w','e','t','y','u',  'i','o','p','[',']']
const chord_keys=['1','2','3','4','5','6','7','8','9','0','-','=']

const keys = document.querySelectorAll('.key')

const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const chordKeys= document.querySelectorAll('.key.chord')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = white_keys.indexOf(key)
  const blackKeyIndex = black_keys.indexOf(key)
  const chordKeyIndex = chord_keys.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  if (chordKeyIndex > -1) playNote(chordKeys[chordKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}