sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    football.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
    info.startCountdown(10)
})
let football: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
football = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e e . . . . 
. . . e e e e e e e e e e . . . 
. . e e e e e e e e e e e e . . 
. e 5 e 5 1 e 1 e 1 e 1 e 5 e . 
. e 5 e 5 1 e 1 e 1 e 1 e 5 e . 
. . e e e e e e e e e e e e . . 
. . . e e e e e e e e e e . . . 
. . . . e e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
