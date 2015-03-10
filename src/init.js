$(document).ready(function(){
  window.dancers = [];
  $('.lineup').click(function(e){
    window.dancers.forEach(function(dancer){
      dancer.$node.css('left', '0')
    }) 
  });

  $(window).on('keyup', function(e){
    if(e.keyCode === 32){
      setInterval(function(){
        $('.Dancer').css('border', '10px solid ' + randomColor())
      }, 100)
      $('.addDancerButton').trigger('click')
    }
  })

  function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }


  // $(window).on('keyup', function(e){
  //   if(e.keyCode === 32){
     
  //   }
  // })

  function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() *.30 + ($('body').height() * .30), 
      $("body").width() * Math.random() *.75,
      Math.random() * 1000
    );
    console.log(dancer.$node.width())
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});