controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
    game.splash("PIRATE MODE!!!")
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
tiles.setCurrentTilemap(tilemap`level1`)
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
scene.cameraFollowSprite(mySprite)
mySprite.setVelocity(game.askForNumber("x speed", 10), game.askForNumber("Y speed", 10))
mySprite.setPosition(26, 100)
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
    for (let index = 0; index < 1; index++) {
        // here a create a orange and red ball
        Create_ball(list[color_1])
        Create_ball2(list_2[color_1])
        color_1 = (color_1 + 1) % list.length
        color_1 = (color_1 + 1) % list_2.length
    }
})
