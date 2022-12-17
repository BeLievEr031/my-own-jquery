$(document).ready(() => {
  $("#hide").click(() => {
    $("h1").hide();
  });

  $("#show").click(() => {
    $("#h1").toggle();
  });
});
// document.querySelector("h1").style["color"] = "red"
// let st = document.querySelector("h1").style;

// console.log(st.color);
