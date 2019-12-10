let dodger = document.querySelector("#dodger");

// move to the LEFT
function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0 ) {
    dodger.style.left = `${left - 1}px`;
  }
}

// move to the RIGHT
function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

// for the right move
// document.addEventListener("keydown", 
// function(e){
//   if (e.key === "ArrowRight"){
//     moveDodgerRight();
//   } 
//   });

// // for the left move
// document.addEventListener("keydown", 
// function(e){
//   if (e.key === "ArrowLeft"){
//     moveDodgerLeft();
//   } 
//   });

document.addEventListener("keydown", 
  function(e){
    switch(e.key){
      case "ArrowLeft":
          moveDodgerLeft();
        break;
      case "ArrowRight":
          moveDodgerRight();
        break;
    }
  })