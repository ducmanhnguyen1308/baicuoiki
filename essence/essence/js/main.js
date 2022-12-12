
$(window).scroll(function(){
    if ($(this).scrollTop()>300){
        $('.fied').show();
    }
    else{
        $('.fied').hide()
    }
})
$('.fied').click(function(){
    $(window).scrollTop(0);
})

const menu = document.querySelector(".menu-sp")
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", function () {
  menu.classList.toggle("is-show")
});
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show")
  }
}
