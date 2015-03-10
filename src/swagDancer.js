
var swagDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('swagdancer')
}

swagDancer.prototype = Object.create(Dancer.prototype)
swagDancer.prototype.constructor = swagDancer
swagDancer.prototype.step = function() {
  Dancer.prototype.step.call(this)
    this.$node.html('<img width="350px"  src = "swag.gif"></img>')
}
