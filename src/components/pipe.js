export default class Pipe {
  constructor (_sketch) {
    this.sketch = _sketch
    this.spacing = 175
    this.top = this.sketch.random(this.sketch.height / 6, 3 / 4 * this.sketch.height)
    this.bottom = this.sketch.height - (this.top + this.spacing)
    this.x = this.sketch.width
    this.w = 80
    this.speed = 6
    this.highlight = false
  }

    hits = function (bird) {
      if (bird.y < this.top || bird.y > this.sketch.height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true
          return true
        }
      }
      this.highlight = false
      return false
    }

    show = function () {
      this.sketch.fill(255)
      if (this.highlight) {
        this.sketch.fill(255, 0, 0)
      }
      this.sketch.rect(this.x, 0, this.w, this.top)
      this.sketch.rect(this.x, this.sketch.height - this.bottom, this.w, this.bottom)
    }

    update = function () {
      this.x -= this.speed
    }

    offscreen = function () {
      return this.x < -this.w
    }
}
