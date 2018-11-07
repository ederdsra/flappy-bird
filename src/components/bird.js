
export default class Bird {
  constructor (_sketch) {
    this.sketch = _sketch
    this.y = this.sketch.height / 2
    this.x = 64

    this.gravity = 0.7
    this.lift = -12
    this.velocity = 0
  }

  show = function () {
    this.sketch.fill(255)
    this.sketch.ellipse(this.x, this.y, 32, 32)
  }

  up = function () {
    this.velocity += this.lift
  }

  update = function () {
    this.velocity += this.gravity
    this.velocity *= 0.9
    this.y += this.velocity

    if (this.y > this.sketch.height) {
      this.y = this.sketch.height
      this.velocity = 0
    }

    if (this.y < 0) {
      this.y = 0
      this.velocity = 0
    }
  }
}
