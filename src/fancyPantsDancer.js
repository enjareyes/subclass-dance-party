
var FancyPants = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('fancypants')
}

FancyPants.prototype = Object.create(Dancer.prototype)
FancyPants.prototype.constructor = FancyPants
FancyPants.prototype.step = function() {
  Dancer.prototype.step.call(this)
    this.$node.html('<img width="300px"  src = "Carlton.gif"></img>')
}
