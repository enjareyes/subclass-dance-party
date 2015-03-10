

var breakDancer = function(top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps)
	this.$node.addClass('breakdancer')
	this.actions()
}

breakDancer.prototype = Object.create(Dancer.prototype)
breakDancer.prototype.constructor = breakDancer
// breakDancer.prototype.step = function(){
// 	Dancer.prototype.step.call(this)
// }


breakDancer.prototype.actions = function(){

	this.$node.html('<img width="250px" src="headspin.jpg"></img>')
	//node editing stuff
	var flipped = false

	this.$node.mouseover(function(e) {
		console.log('mouseover hit')
		if (flipped === false){
			$(this).transition({
				perspective: '100px',
				rotateY: '180deg',
			})
			flipped = true;
		} 
		else {
			$(this).transition({
				perspective: '100px',
				rotateY: '-180deg'
			})
			flipped = false;
		}
	})

}