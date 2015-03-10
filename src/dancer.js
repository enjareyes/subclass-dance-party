// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  //debugger
  // console.log(this)
  // var dancer = {}
  // now that we have defined the dancer object, 
  // we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.$node = $('<span class="Dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

  // return this;
};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //that = this

    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };