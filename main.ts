input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.showString("Well done")
    led.stopAnimation()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
music.playMelody("C D E F E F G C5 ", 120)
steps = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Ghost)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # . # . #
            `)
        basic.showIcon(IconNames.Ghost)
    }
})
