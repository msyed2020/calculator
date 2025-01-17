var inp = document.getElementById("numInp");

function submit() {

  document.addEventListener("DOMContentLoaded", () => {
      
      var accept = document.getElementById("accept");
    
      accept.addEventListener("click", () => {
        var inpVal = parseFloat(inp.value);
    
        if (!isNaN(inpVal)) {
          console.log("The entered number is:", inpVal);
        } else {
          console.error("Please enter a valid number.");
        }
      });
    });

}

function clear() {
  inp.value = 0;
  var cleared = document.getElementById("clear");
  clear.addEventListener("click", () => {
    var inpVal = parseFloat(inp.value);
    console.log("Cleared, your value is " + inpVal);
  })
}

function add() {
  


}
