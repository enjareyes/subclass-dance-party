var awkwardGuyDancer = function(top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps)
	this.$node.addClass('akwardGuy')
}

awkwardGuyDancer.prototype = Object.create(Dancer.prototype)
awkwardGuyDancer.prototype.constructor = awkwardGuyDancer
awkwardGuyDancer.prototype.step = function() {
	Dancer.prototype.step.call(this)
	this.$node.html('<img src="awkwardGuyDancer.gif" width="350px"></img>')
	
}