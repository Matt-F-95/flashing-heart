if (led.point(5, 5)) {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
} else {
    basic.showArrow(ArrowNames.North)
}
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
