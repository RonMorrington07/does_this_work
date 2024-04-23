function Track_1 (num: number) {
    if (num == 11) {
        for (let Index = 0; Index <= 6; Index++) {
            basic.showNumber(Index)
        }
    }
}
let list: Image[] = []
let Progindex = 1
list[1] = images.createImage(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # . . .
    `)
list[2] = images.createImage(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
list[3] = images.createImage(`
    . . # # .
    . # . . .
    . . # . .
    . . . # .
    . # # . .
    `)
basic.forever(function () {
    while (Progindex < 9) {
        list[Progindex].showImage(0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        Progindex = Progindex + 10
        Track_1(Progindex)
    } else if (input.buttonIsPressed(Button.A)) {
        if (Progindex == 1) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Half))
            basic.pause(500)
        } else {
            Progindex += -1
            basic.pause(500)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (Progindex == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Half))
            basic.pause(500)
        } else {
            Progindex += 1
            basic.pause(500)
        }
    }
})
