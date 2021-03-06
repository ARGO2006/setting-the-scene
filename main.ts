tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . f d d d d 5 5 5 f . . . . . 
    . c d 9 d d 9 d 5 5 f f . . . . 
    . c d 9 d d 9 d 5 5 d d f . . . 
    c d e e d d d d 5 5 b d c . . . 
    c d d d d c d d 5 5 b d c . f f 
    c c c c c d d d 5 5 f c . f 5 f 
    . f d d d d d 5 5 f f . . f 5 f 
    . . f f f f f 5 5 5 5 f . f 5 f 
    . . . . f 5 5 5 5 5 5 5 f f 5 f 
    . . . f 5 f f 5 f 5 5 5 5 f f . 
    . . . f 5 f f 5 f 5 5 5 5 f . . 
    . . . f d b f d b f f 5 f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
