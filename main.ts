input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    music.playTone(494, music.beat(BeatFraction.Double))
})
let baseline = input.magneticForce(Dimension.X)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.X)) - baseline > 100) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
