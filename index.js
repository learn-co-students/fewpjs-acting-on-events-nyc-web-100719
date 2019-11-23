// Your code here
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//the second parameter of 10 is saying using the numerical system with a base of 10
// moveDodgerRight
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
})
