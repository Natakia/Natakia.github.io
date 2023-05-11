import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka.png")

loadSprite("balwan", "b.png")

loadSound("muzyka","cicha noc.mp3")

add([
    sprite("kartka"), 
    pos(0,0)
])

const balwan = add(
    [
        sprite("balwan"),
        pos(100,400),
        scale(1)
    ]
)

let wprawo = true

balwan.onUpdate(() => {

    if (wprawo && balwan.pos.x<500)
    balwan.pos.x += 1

    else if (!wprawo && balwan.pos.x>50)
    balwan.pos.x -=1
    else wprawo ^= true
}
)

add([
   ("muzyka")
])

onMouseRelease(()=>play("muzyka"))

