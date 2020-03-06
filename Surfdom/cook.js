$(function(){
    $("button").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });
        }
    });
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
