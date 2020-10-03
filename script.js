window.onscroll = () => {
  sticky();
}

/* 
# Create Dummy Text in DOM #
You don't have to use the code below in your project.
In this example, however, you have to declare them first before declare "function sticky()".
*/

let parag1 = document.querySelector(".parag1");
let parag2 = document.querySelector(".parag2");

function createDummyParag(parag, line) {
  let sum ='';
  let txt = "Elit velit exercitation est commodo. "
  for (let i = 0; i < line; i++){
    sum += txt;
  }
  parag.innerHTML = "<h3>" + txt + "</h3>" + "<p>" + sum + "</p>";
}

createDummyParag(parag1, 50);
createDummyParag(parag2, 300);


function sticky() {
  let target = document.querySelector(".menu");
  let targetTop = target.offsetTop;
  let prevSib = target.previousElementSibling;
  let absoluteTargetTop = prevSib.offsetTop + prevSib.offsetHeight;

  if (window.pageYOffset >= targetTop) {
    target.classList.add("sticky");
    if (window.pageYOffset <= absoluteTargetTop) {
      target.classList.remove("sticky");
    }
  }
}