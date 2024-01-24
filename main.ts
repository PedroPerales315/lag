controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("PIRATE MODE!!!")
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . 4 f f 4 . . . . . . . 
        . . . . 4 4 f f f f 4 4 . . . . . 
        4 . . 4 f f f f f f f f 4 . . 4 . 
        f 4 4 f f f f f f f f f f 4 4 f . 
        f f f f 2 2 2 2 2 2 2 2 f f f f . 
        2 2 2 2 3 3 3 3 3 3 3 3 2 2 2 2 . 
        3 2 3 3 3 f 3 3 3 3 f 3 3 3 3 3 . 
        2 2 2 3 3 f 3 3 3 3 f 3 3 3 3 3 . 
        2 3 2 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        2 3 3 f f f f f f f f f f f 3 3 . 
        2 2 f f f f f f f f f f f f 3 3 . 
        3 2 f f f f f f f f f f f f 3 3 . 
        3 3 3 f f f f f f f f f f 3 3 3 . 
        . 3 3 3 f f f f f f f f 3 3 3 3 . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        `)
    play_song()
    sprites.destroy(Ball, effects.confetti, 500)
})
// this fonction create a ball that bonces arond and you can set its colors
function Create_ball2 (Ball_colors: Image) {
    tempImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 . 9 9 9 9 9 9 9 9 . . . 
        . . 9 . 9 9 9 9 9 . . . 9 9 . . 
        . 9 . . 9 9 9 9 9 . . . 9 9 9 . 
        . 9 . 9 9 9 9 9 9 . . . 9 9 9 . 
        . 9 . 9 9 9 9 9 9 9 9 9 . 9 9 . 
        . . . . 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . . 9 9 9 9 9 9 9 9 9 . 9 . 
        . . . . . 9 9 9 9 9 9 9 . . 9 . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    tempImage.replace(9, Ball_colors.getPixel(0, 0))
    TempImage2 = img`
        . . . . . b b b b b b . . . . . 
        . . . b b . . . . . . b b . . . 
        . . b b . . . . . . . . b b . . 
        . b b 9 d . . . . . . . . b b . 
        . b 9 d . . . . . 1 1 1 . . b . 
        b 9 d d . . . . . 1 1 1 . . . b 
        b 9 d . . . . . . 1 1 1 . . . b 
        b 9 3 . . . . . . . . . 1 . . b 
        b 5 3 d . . . . . . . . . . . b 
        b 5 3 3 . . . . . . . . . d . b 
        b 5 d 3 3 . . . . . . . d d . b 
        . b 5 3 3 3 d . . . . d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `
    TempImage2.replace(3, Ball_colors.getPixel(1, 0))
    Ball = sprites.create(add(tempImage, TempImage2), SpriteKind.Enemy)
    Ball.setFlag(SpriteFlag.BounceOnWall, true)
    Ball.setVelocity(randint(-50, 50), randint(-50, 50))
    Ball.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
// this fonction create a ball that bonces arond and you can set its colors
function Create_ball (Ball_colors: Image) {
    tempImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 . 9 9 9 9 9 9 9 9 . . . 
        . . 9 . 9 9 9 9 9 . . . 9 9 . . 
        . 9 . . 9 9 9 9 9 . . . 9 9 9 . 
        . 9 . 9 9 9 9 9 9 . . . 9 9 9 . 
        . 9 . 9 9 9 9 9 9 9 9 9 . 9 9 . 
        . . . . 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . . 9 9 9 9 9 9 9 9 9 . 9 . 
        . . . . . 9 9 9 9 9 9 9 . . 9 . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    tempImage.replace(9, Ball_colors.getPixel(0, 0))
    TempImage2 = img`
        . . . . . b b b b b b . . . . . 
        . . . b b . . . . . . b b . . . 
        . . b b . . . . . . . . b b . . 
        . b b 9 d . . . . . . . . b b . 
        . b 9 d . . . . . 1 1 1 . . b . 
        b 9 d d . . . . . 1 1 1 . . . b 
        b 9 d . . . . . . 1 1 1 . . . b 
        b 9 3 . . . . . . . . . 1 . . b 
        b 5 3 d . . . . . . . . . . . b 
        b 5 3 3 . . . . . . . . . d . b 
        b 5 d 3 3 . . . . . . . d d . b 
        . b 5 3 3 3 d . . . . d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `
    TempImage2.replace(3, Ball_colors.getPixel(1, 0))
    Ball = sprites.create(add(tempImage, TempImage2), SpriteKind.Enemy)
    Ball.setFlag(SpriteFlag.BounceOnWall, true)
    Ball.setVelocity(randint(-50, 50), randint(-50, 50))
    Ball.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
}
// ['C5', 'C3']
// ['G4', 'G3']
// ['C5', 'C3']
// ['G3']
// ['G4']
// ['G#4', 'F3']
// ['G#4']
// ['G#4', 'C4']
// ['A#4']
// ['G#4']
// ['G4', 'C3']
// ['G3']
// ['D#4']
// ['F4', 'F3']
// ['F4']
// ['F4', 'C4']
// ['G4']
// ['F4']
// ['D#4', 'C3']
// ['D4']
// ['C4', 'G3']
// ['C#4']
// ['D4', 'D3']
// ['D4']
// ['D4', 'G#3']
// ['C#4']
// ['D4']
// ['G4', 'G2']
// ['F3']
// ['C5', 'C3']
// ['G4', 'G3']
// ['C5', 'C3']
// ['G3']
// ['G4']
// ['G#4', 'F3']
// ['G4']
// ['G#4']
// ['A#4', 'C4']
// ['G#4']
// ['G4', 'C3']
// ['G3']
// ['D#4']
// ['F4', 'C3']
// ['G4']
// ['G#4']
// ['G4', 'G3']
// ['F4']
// ['G4', 'F3']
// ['C5']
// ['D5']
// ['D#5', 'C4']
// ['C5']
// ['F#4', 'D5', 'A3']
// ['F4', 'G4', 'B3']
// ['C5', 'G3']
// ['A#4']
// ['G#4']
// ['G4']
// ['G4', 'A#3']
// ['G#4']
// ['A#4']
// ['G4', 'A#3']
// ['D#4']
// ['F4']
// ['D#4']
// ['D4', 'A#3']
// ['C4']
// ['A#3', 'G#3']
// ['A#3']
// ['D#4']
// ['D#4', 'A#3']
// ['F4']
// ['G4']
// ['D#4', 'A#3']
// ['F4', 'A#3']
// ['F4']
// ['G4']
// ['F4', 'A#3']
// ['G4']
// ['G#4']
// ['G#4', 'G#3']
// ['A#4']
// ['G4']
// ['D#4', 'A#3']
// ['F4']
// ['G4', 'A#3']
// ['D#4', 'G3']
// ['F4', 'F3']
// ['F4']
// ['G4']
// ['A4', 'F3']
// ['C5']
// ['A#4', 'A#3']
// ['G#4', 'F3', 'A#3']
// ['G4', 'A#3']
// ['G4']
// ['G#4']
// ['A#4']
// ['G4', 'G3']
// ['F4', 'A#3']
// ['B3']
// ['D#4', 'G3']
// ['F4']
// ['G4']
// ['D#4', 'G3']
// ['D4', 'A#3']
// ['A#3']
// ['C4']
// ['C4', 'G#3']
// ['D4']
// ['D#4']
// ['G#4', 'G#3']
// ['G4']
// ['F4', 'F3']
// ['G4']
// ['D#4', 'G3']
// ['D#4']
// ['G4']
// ['D#4']
// ['A#3', 'F3']
// ['G4']
// ['F4']
// ['D#4']
// ['D4', 'F3']
// ['F4']
// ['D#4', 'A#3']
// ['D4', 'A#3']
function play_song () {
    music.setVolume(255)
    // C5
    timer.background(function () {
        music.playTone(523, 372)
    })
    // C3
    music.playTone(130, 373)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // G3
    music.playTone(195, 373)
    // C5
    timer.background(function () {
        music.playTone(523, 709.5)
    })
    // C3
    music.playTone(130, 710)
    // G3
    music.playTone(195, 317)
    // G4
    music.playTone(391, 335)
    // G#4
    timer.background(function () {
        music.playTone(415, 279)
    })
    // F3
    music.playTone(174, 279)
    // G#4
    music.playTone(415, 92)
    // G#4
    timer.background(function () {
        music.playTone(415, 235.5)
    })
    // C4
    music.playTone(261, 235)
    // A#4
    music.playTone(466, 235)
    // G#4
    music.playTone(415, 210)
    // G4
    timer.background(function () {
        music.playTone(391, 709.5)
    })
    // C3
    music.playTone(130, 710)
    // G3
    music.playTone(195, 317)
    // D#4
    music.playTone(311, 335)
    // F4
    timer.background(function () {
        music.playTone(349, 279)
    })
    // F3
    music.playTone(174, 279)
    // F4
    music.playTone(349, 92)
    // F4
    timer.background(function () {
        music.playTone(349, 235.5)
    })
    // C4
    music.playTone(261, 235)
    // G4
    music.playTone(391, 235)
    // F4
    music.playTone(349, 210)
    // D#4
    timer.background(function () {
        music.playTone(311, 532.5)
    })
    // C3
    music.playTone(130, 532)
    // D4
    music.playTone(293, 148)
    // C4
    timer.background(function () {
        music.playTone(261, 532.5)
    })
    // G3
    music.playTone(195, 532)
    // C#4
    music.playTone(277, 148)
    // D4
    timer.background(function () {
        music.playTone(293, 532.5)
    })
    // D3
    music.playTone(146, 532)
    // D4
    music.playTone(293, 148)
    // D4
    timer.background(function () {
        music.playTone(293, 235.5)
    })
    // G#3
    music.playTone(207, 235)
    // C#4
    music.playTone(277, 235)
    // D4
    music.playTone(293, 210)
    // G4
    timer.background(function () {
        music.playTone(391, 709.5)
    })
    // G2
    music.playTone(97, 710)
    // F3
    music.playTone(174, 673)
    // C5
    timer.background(function () {
        music.playTone(523, 372)
    })
    // C3
    music.playTone(130, 373)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // G3
    music.playTone(195, 373)
    // C5
    timer.background(function () {
        music.playTone(523, 709.5)
    })
    // C3
    music.playTone(130, 710)
    // G3
    music.playTone(195, 317)
    // G4
    music.playTone(391, 335)
    // G#4
    timer.background(function () {
        music.playTone(415, 235.5)
    })
    // F3
    music.playTone(174, 235)
    // G4
    music.playTone(391, 235)
    // G#4
    music.playTone(415, 210)
    // A#4
    timer.background(function () {
        music.playTone(466, 532.5)
    })
    // C4
    music.playTone(261, 532)
    // G#4
    music.playTone(415, 92)
    // G4
    timer.background(function () {
        music.playTone(391, 709.5)
    })
    // C3
    music.playTone(130, 710)
    // G3
    music.playTone(195, 317)
    // D#4
    music.playTone(311, 335)
    // F4
    timer.background(function () {
        music.playTone(349, 235.5)
    })
    // C3
    music.playTone(130, 235)
    // G4
    music.playTone(391, 235)
    // G#4
    music.playTone(415, 210)
    // G4
    timer.background(function () {
        music.playTone(391, 532.5)
    })
    // G3
    music.playTone(195, 532)
    // F4
    music.playTone(349, 148)
    // G4
    timer.background(function () {
        music.playTone(391, 235.5)
    })
    // F3
    music.playTone(174, 235)
    // C5
    music.playTone(523, 235)
    // D5
    music.playTone(587, 210)
    // D#5
    timer.background(function () {
        music.playTone(622, 532.5)
    })
    // C4
    music.playTone(261, 532)
    // C5
    music.playTone(523, 148)
    // F#4
    timer.background(function () {
        music.playTone(369, 372)
    })
    // D5
    timer.background(function () {
        music.playTone(587, 372)
    })
    // A3
    music.playTone(220, 373)
    // F4
    timer.background(function () {
        music.playTone(349, 372)
    })
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // B3
    music.playTone(246, 373)
    // C5
    timer.background(function () {
        music.playTone(523, 709.5)
    })
    // G3
    music.playTone(195, 710)
    // A#4
    music.playTone(466, 532)
    // G#4
    music.playTone(415, 176)
    // G4
    music.playTone(391, 710)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // A#3
    music.playTone(233, 373)
    // G#4
    music.playTone(415, 176)
    // A#4
    music.playTone(466, 710)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // A#3
    music.playTone(233, 373)
    // D#4
    music.playTone(311, 176)
    // F4
    music.playTone(349, 532)
    // D#4
    music.playTone(311, 176)
    // D4
    timer.background(function () {
        music.playTone(293, 372)
    })
    // A#3
    music.playTone(233, 373)
    // C4
    music.playTone(261, 176)
    // A#3
    timer.background(function () {
        music.playTone(233, 316.5)
    })
    // G#3
    music.playTone(207, 317)
    // A#3
    music.playTone(233, 354)
    // D#4
    music.playTone(311, 710)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // A#3
    music.playTone(233, 373)
    // F4
    music.playTone(349, 176)
    // G4
    music.playTone(391, 710)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // A#3
    music.playTone(233, 373)
    // F4
    timer.background(function () {
        music.playTone(349, 316.5)
    })
    // A#3
    music.playTone(233, 317)
    // F4
    music.playTone(349, 176)
    // G4
    music.playTone(391, 176)
    // F4
    timer.background(function () {
        music.playTone(349, 316.5)
    })
    // A#3
    music.playTone(233, 317)
    // G4
    music.playTone(391, 354)
    // G#4
    music.playTone(415, 710)
    // G#4
    timer.background(function () {
        music.playTone(415, 372)
    })
    // G#3
    music.playTone(207, 373)
    // A#4
    music.playTone(466, 176)
    // G4
    music.playTone(391, 710)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // A#3
    music.playTone(233, 373)
    // F4
    music.playTone(349, 710)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // A#3
    music.playTone(233, 373)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // G3
    music.playTone(195, 373)
    // F4
    timer.background(function () {
        music.playTone(349, 316.5)
    })
    // F3
    music.playTone(174, 317)
    // F4
    music.playTone(349, 176)
    // G4
    music.playTone(391, 176)
    // A4
    timer.background(function () {
        music.playTone(440, 709.5)
    })
    // F3
    music.playTone(174, 710)
    // C5
    music.playTone(523, 710)
    // A#4
    timer.background(function () {
        music.playTone(466, 1422)
    })
    // A#3
    music.playTone(233, 1423)
    // G#4
    timer.background(function () {
        music.playTone(415, 184.5)
    })
    // F3
    timer.background(function () {
        music.playTone(174, 184.5)
    })
    // A#3
    music.playTone(233, 185)
    // G4
    timer.background(function () {
        music.playTone(391, 316.5)
    })
    // A#3
    music.playTone(233, 317)
    // G4
    music.playTone(391, 176)
    // G#4
    music.playTone(415, 176)
    // A#4
    music.playTone(466, 710)
    // G4
    timer.background(function () {
        music.playTone(391, 372)
    })
    // G3
    music.playTone(195, 373)
    // F4
    timer.background(function () {
        music.playTone(349, 372)
    })
    // A#3
    music.playTone(233, 373)
    // B3
    music.playTone(246, 373)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // G3
    music.playTone(195, 373)
    // F4
    music.playTone(349, 176)
    // G4
    music.playTone(391, 710)
    // D#4
    timer.background(function () {
        music.playTone(311, 372)
    })
    // G3
    music.playTone(195, 373)
    // D4
    timer.background(function () {
        music.playTone(293, 372)
    })
    // A#3
    music.playTone(233, 373)
    // A#3
    music.playTone(233, 373)
    // C4
    music.playTone(261, 710)
    // C4
    timer.background(function () {
        music.playTone(261, 372)
    })
    // G#3
    music.playTone(207, 373)
    // D4
    music.playTone(293, 176)
    // D#4
    music.playTone(311, 710)
    // G#4
    timer.background(function () {
        music.playTone(415, 372)
    })
    // G#3
    music.playTone(207, 373)
    // G4
    music.playTone(391, 710)
    // F4
    timer.background(function () {
        music.playTone(349, 372)
    })
    // F3
    music.playTone(174, 373)
    // G4
    music.playTone(391, 176)
    // D#4
    timer.background(function () {
        music.playTone(311, 316.5)
    })
    // G3
    music.playTone(195, 317)
    // D#4
    music.playTone(311, 354)
    // G4
    music.playTone(391, 532)
    // D#4
    music.playTone(311, 176)
    // A#3
    timer.background(function () {
        music.playTone(233, 372)
    })
    // F3
    music.playTone(174, 373)
    // G4
    music.playTone(391, 176)
    // F4
    music.playTone(349, 532)
    // D#4
    music.playTone(311, 176)
    // D4
    timer.background(function () {
        music.playTone(293, 372)
    })
    // F3
    music.playTone(174, 373)
    // F4
    music.playTone(349, 176)
    // D#4
    timer.background(function () {
        music.playTone(311, 709.5)
    })
    // A#3
    music.playTone(233, 710)
    // D4
    timer.background(function () {
        music.playTone(293, 1422)
    })
    // A#3
    music.playTone(233, 1423)
}
function add (img1: Image, img2: Image) {
    for (let X = 0; X <= 16; X++) {
        for (let Y = 0; Y <= 16; Y++) {
            if (img1.getPixel(X, Y) != 0) {
                img2.setPixel(X, Y, img1.getPixel(X, Y))
            }
        }
    }
    return img2
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let color_1 = 0
let TempImage2: Image = null
let tempImage: Image = null
let Ball: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
    999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
    99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
    9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
    9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
    9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
    9999999999999999dddd99ddddd9999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
    9999999999999999d11dddd1d1ddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
    9999999999999999d111dd11d11ddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
    999999999dddd9ddd111d111d111dddd1ddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
    999999999d11ddddd111d111d1111dd11dddd11d666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
    999999999d111dddd1111d1111111d111ddd111dd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
    999999999d1111dddd111d1111111111ddd1111dddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
    999999999d11111ddd11111111111111dd11111ddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
    999999999d11111ddd1111111111d11ddd1111ddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
    999999999dd11111ddd1111dd11dddddd11111ddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
    9999999999d111111dd11ddd5ddddddd11111dd7dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
    79999ddd99dd111111ddd5d555dddddd1111ddd7ddddd799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
    66999d11ddddd111ddddd55555d5dddd111ddddd1111d99999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
    66699d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
    666799d1111ddddddd111dd555511111ddddd11111dd9999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
    666699dd11111ddddd11111d5d11111dddd111111dd9999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
    6666977ddd11111dddd11111d11111ddd11111dddd999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
    667777777dddd1111ddd11ddddd11dd1111ddddddd9999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
    7777777111111ddddddddd11111ddddddddd111111d999999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
    77777771111111111dddd1111111dddd11111111177999999999b76666666666666666666666677777777777776799999999996677dd799999999999999ddddd99dddd66666666666666666666666777
    777777777111111dddddddd111dddddddd111117779999999999b676666666666666666666677777777777777776999999996677777d7799999999999ddd1d1dddd11d76666666666666666666677777
    77777777777777dd7d11ddddddddd111dddddd779999999999997b77666666666666666666777777777777777776799999667777777dd7999999ddd99dd11d11dd111d77666666666666666666777777
    777777777ddddd771111d111dddd11111177dddd7799999999999bb77666666666666666677777777777777777776999667777777777d7dddd99d1dddd111d111d111ddd7dddd6666666666667777777
    77777777ddddd7711111d1111ddd711111177dddd7799999999997bb7776666666666666777777777777777777776666777777777777d7d11dd9d11dd1111d111d111ddddd11d6666666666677777777
    7777777ddddd7711111dd11111dd77111111777777999999999999bbb677666666666667777777777777777777776677777777777777d7d111ddd111d1111111d1111dddd111d6666666666777777777
    777777777ddd711111d7dd1111ddd67d11111d99999999999999999bbb6666666666666777777777777777777777777777777777777dd6d1111ddd1111111111d111dddd1111d6666666666777777777
    777777777777d111dd777d11111d7669ddddd9999999999999999999bbbbbb66666666b777777777777777777777777777777777777d76d11111dd11111111111111ddd11111db66666666b777777777
    7777777777777ddd777777d1111d666999999999999999999999999997bbbbbbbbbbbbb777777777777777777777777777777777777766dd1111ddd11d1111111111ddd11111dbbbbbbbbbb777777777
    77777777777777777777777d111d66799999999999999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666dd11111dddddd11dd1111ddd11111ddbbbbbbbbbb677777777
    777777777777777777777777ddd66699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669dd11111ddddddd5ddd11dd111111d97bbbbbbbbb667777777
    7777777777777777777777777666699999999999999999999999999999999999999999966777777777777777777777777777777776dddd9ddd1111dddddd555d5ddd111111dd99ddd999999667777777
    777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776d1111ddddd111dddd5d55555ddddd111ddddd11d999999766777777
    777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666dd1111ddddd1d11dd5555555dd11d11dddd1111d999999966677777
    7777777777777777777766666699999999999999999999999999999999999dddddddddddd666677777777777777777777777666666dd11111ddddd111115555dd111ddddddd1111dddddddddd6666777
    6777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666677777777777777776666666799dd111111dddd11111d5d11111ddddd11111dddddddddddd666666
    66666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999dddd11111ddd11111d11111dddd11111dddddddddddddddd6666
    666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999ddddddd1111dd11ddddd11ddd1111dddd777dddddddddddddd66
    d6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd66666666666666667999999999d111111ddddddddd11111ddddddddd1111117dddddddddddddddd
    ddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd777799999999999999999977111111111dddd1111111dddd11111111117dddddddddddddddd
    dddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd777999999999999999999977711111dddddddd111dddddddd11111177ddddddddddddddddd
    ddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd7999999999999999999999977dddddd111ddddddddd11d7dd77777dddddd77777dddddddd
    ddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6677dddd77111111dddd111d111177ddddddddddddd7777777dddd
    dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb77dddd771111117ddd1111d1111177ddddddddddddd7777777777
    7777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b677777711111177dd11111dd1111177dddddddddddddd77777777
    7777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666d11111d766dd1111dd9d111117dddddddddddddddd779997
    999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666ddddd6666d11111d999dd111ddddddddddddddddddd7999
    99999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b6666666666666d1111d999997ddddddddddddddddddd7777999
    9999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb666666666666d111d999999977777777777777777777779999
    99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666666ddd7776699999777777777777777779999999
    9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
    9999999999996766666666666666666666666667777777777769999999999999667999999999999999999999999967666666666666666666666666677777777777699999999999996679999999999999
    999999999999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b76666666666666666666666677777777777776799999999996677dd799999999999
    999999999999b676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777777777777776999999996677777d779999999999
    9999999999997b77666666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777777777777776799999667777777dd79999999999
    9999999999999bb77666666666666666677777777777777777776999667777777777d769999999999999999999999bb77666666666666666677777777777777777776999667777777777d76999999999
    99999999999997bb7776666666666666777777777777777777776666777777777777d7699999999999999999999997bb7776666666666666777777777777777777776666777777777777d76999999999
    99999999999999bbb677666666666667777777777777777777776677777777777777d7699999999999999999999999bbb677666666666667777777777777777777776677777777777777d76999999999
    999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777777777777777777777777777777dd66999999999
    9999999999999999bbbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777777777777777777777777777777d766999999999
    999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb7777777777777777777777777777777777777666999999999
    99999999999999999997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb6777777777777777777777777777777777776667999999999
    9999999999999999999997bbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb6677777777777777777777777777777777766669999999999
    9999999999999999999999999999999667777777777777777777777777777777766669999999999999999999999999999999999999999996677777777777777777777777777777777666699999999999
    9999999999999999999999999999999766777777777777777777777777777777666699999999999999999999999999999999999999999997667777777777777777777777777777776666999999999999
    9999999999999999999999999999999966677777777777777777777777777766666999999999999999999999999999999999999999999999666777777777777777777777777777666669999999999999
    999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd66667777777777777777777777766666699999999999999
    999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd6666666777777777777777766666667999999999999999
    9999999999999999dddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd66666666666666666666666666799999999999999999
    99999999999999dddddddddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd666666666666666666666679999999999999999999
    9999999999999dddddddddddddddddddddddddddd6666666666666666799999999999999999999999999999999999dddddddddddddddddddddddddddd666666666666666679999999999999999999999
    999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddd77779999999999999999999999999999999
    99999999999ddddddddddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddd7779999999999999999999999999999999
    99999999999dddddddddddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777ddddddddddddddd799999999999999999999999999999999
    99999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777ddddddddddd799999999999999999b66666666679999
    99999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777dddddd7999999999999999999bb6666666666679
    799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd777777777777d799999999999999999997b6666666666666
    6699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd7799977777799999999999966b7999997b666666666666
    66699999999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999999999999999999966666679999bb66666666666
    6667999999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd777799999999999999999966666666b9997b66666666666
    66669999999999777777777777777777777799999999999999999966666666666b99bb666666666666669999999999777777777777777777777799999999999999999966666666666b99bb6666666666
    666697777669999977777777777777777999999999999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b6666666666
    6677777777699999999999999999999999999999999999999999966666666666666666666666666666777777776999999999999999999999999999999999999999999666666666666666666666666666
    7777777777699999999999996679999999dddd99ddddd9999999676666666666666666666666666777777777776999999999999966799999999999999999999999996766666666666666666666666667
    77777777776799999999996677dd799999d11dddd1d1ddd99999b76666666666666666666666677777777777776799999999996677dd799999999999999999999999b766666666666666666666666777
    777777777776999999996677777d779999d111dd11d11dd99dddb676666666666666666666677777777777777776999999996677777d779999999999999999999999b676666666666666666666677777
    777777777776799999667777777dddd9ddd111d111d111dddd1d7bdddd6666666666666666777777777777777776799999667777777dd799999999999999999999997b77666666666666666666777777
    777777777777699966777777777d11ddddd111d111d1111dd11d9dd11d66666666666666677777777777777777776999667777777777d769999999999999999999999bb7766666666666666667777777
    777777777777666677777777777d111dddd1111d1111111d111ddd111d76666666666666777777777777777777776666777777777777d7699999999999999999999997bb777666666666666677777777
    777777777777667777777777777d1111dddd111d1111111111ddd1111d77666666666667777777777777777777776677777777777777d7699999999999999999999999bbb67766666666666777777777
    777777777777777777777777777d11111ddd11111111111111dd11111d6666666666666777777777777777777777777777777777777dd66999999999999999999999999bbb6666666666666777777777
    777777777777777777777777777d11111ddd1111111111d11ddd1111ddbbbb66666666b777777777777777777777777777777777777d7669999999999999999999999999bbbbbb66666666b777777777
    777777777777777777777777777dd11111ddd1111dd11dddddd11111ddbbbbbbbbbbbbb7777777777777777777777777777777777777666999999999999999999999999997bbbbbbbbbbbbb777777777
    7777777777777777777777777776d111111dd11ddd5ddddddd11111dd997bbbbbbbbbbb677777777777777777777777777777777777666799999999999999999999999999997bbbbbbbbbbb677777777
    77777777777777777777777ddd66dd111111ddd5d555dddddd1111ddd9ddddbbbbbbbbb66777777777777777777777777777777777666699999999999999999999999999999997bbbbbbbbb667777777
    77777777777777777777777d11ddddd111ddddd55555d5dddd111ddddd1111d9999999966777777777777777777777777777777776666999999999999999999999999999999999999999999667777777
    77777777777777777777777d1111dddd11d11dd5555555dd11d1ddddd1111dd9999999976677777777777777777777777777777766669999999999999999999999999999999999999999999766777777
    777777777777777777777766d1111ddddddd111dd555511111ddddd11111dd99999999996667777777777777777777777777776666699999999999999999999999999999999999999999999966677777
    777777777777777777776666dd11111ddddd11111d5d11111dddd111111dddddddddddddd66667777777777777777777777766666699999999999999999999999999999999999dddddddddddd6666777
    6777777777777777766666667ddd11111dddd11111d11111ddd11111dddddddddddddddddd6666666777777777777777766666667999999999999999999999999999999999dddddddddddddddd666666
    666666666666666666666679777dddd1111ddd11ddddd11dd1111ddddddddddddddddddddddd666666666666666666666666667999999999999999999999999999999999dddddddddddddddddddd6666
    6666666666666666666679997111111ddddddddd11111ddddddddd111111dddddddddddddddddd66666666666666666666667999999999999999999999999999999999dddddddddddddddddddddddd66
    d6666666666666666799999971111111111dddd1111111dddd11111111177dddddddddddddddddddd6666666666666666799999999999999999999999999999999999ddddddddddddddddddddddddddd
    ddddd7777999999999999999977111111dddddddd111dddddddd11111777ddddddddddddddddddddddddd77779999999999999999999999999999999999999999999dddddddddddddddddddddddddddd
    dddddd77799999999999999999977777dd7d11ddddddddd111dddddd77dddddddddddddddddddddddddddd777999999999999999999999999999999999999999999ddddddddddddddddddddddddddddd
    ddddddd79999999999999999999ddddd771111d111dddd11111177dddd77ddddddd77777ddddddddddddddd79999999999999999999999999999999999999999999dddddddddddddddd77777dddddddd
    ddddddd799999999999999999bddddd7711111d1111ddd711111177dddd77dddddddd7777777ddddddddddd799999999999999999b6666666667999999999999997dddddddddddddddddd7777777dddd
    dddddd7999999999999999999ddddd7711111dd11111dd77111111777777dddddddddd7777777777dddddd7999999999999999999bb666666666667999999999997ddddddddddddddddddd7777777777
    7777d799999999999999999997bddd711111d6dd1111dd997d11111ddddddddddddddddd777777777777d799999999999999999997b6666666666666799999999997dddddddddddddddddddd77777777
    7777799999999999966b7999997b66d111dd666d11111d9999dddddddddddddddddddddddd7799977777799999999999966b7999997b6666666666666699999999977ddddddddddddddddddddd779997
    999999999999999966666679999bb66ddd666666d1111d99999977dddddddddddddddddddddd7999999999999999999966666679999bb6666666666666699999999977dddddddddddddddddddddd7999
    99999999999999966666666b9997b666666666666d111d9999999777ddddddddddddddddd777799999999999999999966666666b9997b666666666666667999999999777ddddddddddddddddd7777999
    9999999999999966666666666b99bb666666666666ddd999999999777777777777777777777799999999999999999966666666666b99bb66666666666666999999999977777777777777777777779999
    99999999999996666666666666677b6666666666666697777669999977777777777777777999999999999999999996666666666666677b66666666666666977776699999777777777777777779999999
    9999999999999666666666666666666666666666667777777769999999999999999999999999999999999999999996666666666666666666666666666677777777699999999999999999999999999999
    `)
mySprite = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 f 3 3 3 3 f 3 3 3 3 3 3 
    3 3 3 3 3 f 3 3 3 3 f 3 3 3 3 3 3 
    3 3 3 3 3 f 3 3 3 3 f 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 f f f f f f f f f f f f 3 3 3 
    3 3 f f f f f f f f f f f f 3 3 3 
    3 3 f f f f f f f f f f f f 3 3 3 
    3 3 3 f f f f f f f f f f 3 3 3 3 
    . 3 3 3 f f f f f f f f 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(game.askForNumber("x speed"), game.askForNumber("Y speed"))
mySprite.setPosition(76, 60)
mySprite.z = 100
mySprite.setBounceOnWall(true)
let list = [
img`
    4 2 
    `,
img`
    1 f 
    `,
img`
    5 9 
    `,
img`
    d c 
    `,
img`
    . d 
    `
]
let list_2 = [
img`
    8 9 
    `,
img`
    5 a 
    `,
img`
    2 6 
    `,
img`
    3 2 
    `,
img`
    . d 
    `
]
game.onUpdate(function () {
    for (let index = 0; index < randint(5, 10); index++) {
        // here a create a orange and red ball
        Create_ball(list[color_1])
        Create_ball2(list_2[color_1])
        color_1 = (color_1 + 1) % list.length
        color_1 = (color_1 + 1) % list_2.length
    }
})