
function getPieces() {
  $.get("/api/gameStart", function(data) {
      console.log(data);
      var pieces = [];
      for (var i = 0; i < data.length; i++) {                
          // console.log(data[i].id);
          id = data[i].id;

          // console.log(data[i].cx);
          currcx = data[i].cx;

          // console.log(data[i].cy);
          currcy = data[i].cy;
          
          $("#"+id).attr({cx: currcx, cy: currcy});
      }
  });
}
getPieces();

$("#1").on("click", function(event) {
    event.stopPropagation();
    var id = $(this).attr("id");
  $(".node").on("click", function(event) {
    let newX = $(this).attr("cx");
    let newY = $(this).attr("cy");
    $("#1").attr({cx: newX, cy: newY});
    $.ajax({
          method: "PUT",
          url: "/api/piece/" + id,
          data: {
              cy: newY,
              cx: newX 
          }
    }).then(getPieces);
  });
});

$("#2").on("click", function(event) {
  event.stopPropagation();
  var id = $(this).attr("id");
  $(".node").on("click", function() {
      
      let newX = $(this).attr("cx");
      let newY = $(this).attr("cy");
      $("#2").attr({cx: newX, cy: newY});
      
      // console.log(newX, newY);
      // console.log(id);
      $.ajax({
          method: "PUT",
          url: "/api/piece/" + id,
          data: {
              cy: newY,
              cx: newX 
          }
      }).then(getPieces);
});
});

$("#3").on("click", function() {
  event.stopPropagation();
  var id = $(this).attr("id");
$(".node").on("click", function() {
  
  let newX = $(this).attr("cx");
  let newY = $(this).attr("cy");

  $("#3").attr({cx: newX, cy: newY});
  $.ajax({
      method: "PUT",
      url: "/api/piece/" + id,
      data: {
          cy: newY,
          cx: newX 
      }
  }).then(getPieces);
});
});

// New code!!
$("#4").on("click", function() {
  event.stopPropagation();
  var id = $(this).attr("id");
$(".node").on("click", function() {
  
  let newX = $(this).attr("cx");
  let newY = $(this).attr("cy");

  $("#4").attr({cx: newX, cy: newY});
  $.ajax({
      method: "PUT",
      url: "/api/piece/" + id,
      data: {
          cy: newY,
          cx: newX 
      }
  }).then(getPieces);
});
});
