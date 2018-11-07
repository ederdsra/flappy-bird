<template>
  <div>

    <div class='sketch' id="sketch">
    </div>
    <div id="score" style="position: absolute;color: white;"></div>
    <button @click="start">ReStart</button>
  </div>
</template>

<script>
import sketch from './sketch.js'
import P5 from 'p5'

export default {
  name: 'FlappyBird',
  data () {
    return {
      myp5: null,
      sketch: sketch,
      score: sketch.score
    }
  },
  mounted () {
    this.myp5 = new P5(sketch, document.getElementById('sketch'))
  },     
  methods: {
    start: function() {
      // this.myp5.remove()
      this.myp5.noCanvas()
      this.myp5 = null
      // this.myp5.loop()
      this.myp5 = new P5(sketch, document.getElementById('sketch'))
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sketch {
   width: 700px;
   height:600px;
   border: 1px solid black;
}
</style>
