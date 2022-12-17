$(document).ready(() => {
  $("#hide").click(() => {
    $("span").hide();
  });
  $("#show").click(() => {
    $("span").show();
  });

  $("#toggle").click(() => {
    $("span").toggle("slow");
  });
});
