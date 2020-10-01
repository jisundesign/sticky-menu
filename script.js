window.onscroll = () => {
  sticky();
}

let target = document.querySelector(".menu");
let targetTop = target.offsetTop;

function sticky() {
  if (window.pageYOffset > targetTop) {
    target.classList.add("sticky");
  } else {
    target.classList.remove("sticky");
  }
}