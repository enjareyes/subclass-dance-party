

var breakDancer = function(top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps)
	this.$node.addClass('breakdancer')
}

breakDancer.prototype = Object.create(Dancer.prototype)
breakDancer.prototype.constructor = breakDancer
breakDancer.prototype.step = function(){
	Dancer.prototype.step.call(this)
	debugger
	this.$node.html('<img width="250px" src="headspin.jpg"></img>')
	this.$node.mouseover(function(e) {
		debugger
	})


	// transition({
	// 	perspective: '100px',
	// 	rotateY: '180deg'
	// })
}