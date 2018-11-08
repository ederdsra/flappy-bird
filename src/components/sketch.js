import Bird from './bird.js'
import Pipe from './pipe.js'

export default function (sketch) {
  var width = 0
  var height = 0
  var bird = null
  var pipes = []
  var score = 0

  sketch.setup = function () {
    width = document.getElementById('sketch').clientWidth
    height = document.getElementById('sketch').clientHeight
    sketch.createCanvas(width, height)
    bird = new Bird(sketch)
    pipes.push(new Pipe(sketch))
  }

  sketch.draw = function () {
    sketch.background(0)
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show()
      pipes[i].update()

      if (pipes[i].hits(bird)) {
        sketch.noLoop()
      } else {
        score++
        var scoreElement = document.getElementById('score')
        scoreElement.innerText = Math.floor(score / 100)
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1)
      }
    }

    bird.update()
    bird.show()

    if (sketch.frameCount % 75 === 0) {
      pipes.push(new Pipe(sketch))
    }
  }

  sketch.keyPressed = function (event) {
    if (event.key === ' ') {
      bird.up()
    }
    console.log(event.key)
  }

  sketch.reset = function () {
    // width = document.getElementById('sketch').clientWidth
    // height = document.getElementById('sketch').clientHeight
    // sketch.resizeCanvas(width, height)
    //      // sketch.setup()
  }
}
