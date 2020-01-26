const nav = document.getElementById('nav');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20) {
    nav.style.backgroundColor = "#000000";
  } else{
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  }
}
