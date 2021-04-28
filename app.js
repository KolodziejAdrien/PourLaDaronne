const mybutton = document.querySelector('.btndiv');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }