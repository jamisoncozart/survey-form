$(document).ready(function(){
  $("#form").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var color = $("#color").val();
    $("#nameOutput").text(name);
    $("#addressOutput").text(address);
    
    //Color selectors for ball
    if(color === "Red") {
      $("#ball").attr("src", "img/redball.jpg");
    } else if(color === "Blue") {
      $("#ball").attr("src", "img/blueball.jpg");
    } else if(color === "Yellow") {
      $("#ball").attr("src", "img/yellowball.jpg");
    }
  });
});