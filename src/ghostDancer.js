
var ghostDancer = function(top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
	this.$node.addClass('ghostdancer')
	this.visible = true
}

ghostDancer.prototype = Object.create(Dancer.prototype);

ghostDancer.prototype.constructor = ghostDancer;

ghostDancer.prototype.step = function(){
	Dancer.prototype.step.call(this);
	this.$node.html('<img src = "ghost.png" width = "180px"></img>');
	if (this.visible){
		this.visible = false;
		this.$node.animate({
			opacity: 0
		}, 1000)
	} else {
		this.visible = true;
		this.$node.animate({
			opacity: 1
		}, 1000)
	}
}

