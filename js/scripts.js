$(document).ready(function(){
  $("#form").submit(function(){
    event.preventDefault();
    var name = $("#name").val();
    console.log(name)
  });
});