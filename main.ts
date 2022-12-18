let lenght = 0
let startTime = 0
let endTime = 0
let time = 0
let deltaTime = 0
let score = 0

function newRound() {
    lenght = randint(500, 5000)
    music.playTone(Note.G, lenght)
}

function pressed() {
    startTime = control.millis()
}

function released() {
    endTime = control.millis()
    time = Math.abs(endTime - startTime)
    deltaTime = Math.abs(lenght - time)
    console.log(lenght)
    console.log(time)
    if (deltaTime < 200) {
        score += 15
        whaleysans.showNumber(score)
    } else if (deltaTime > 200 && deltaTime < 300) {
        score += 10
        whaleysans.showNumber(score)
    } else if (deltaTime > 300 && deltaTime < 400) {
        score += 5
        whaleysans.showNumber(score)
    } else {
        whaleysans.showNumber(score)
    }
    newRound()
}

let wasPressed = false
newRound()
basic.forever(function() {
    if (score >= 50) {
        basic.showString("Game Over!")
    }
    if (input.buttonIsPressed(Button.A)) {
        if (!wasPressed) {
            pressed()
        }
        wasPressed = true
    } else if (wasPressed) {
            released()
        wasPressed = false
    }
})