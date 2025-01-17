var inp = document.getElementById("numInp");

function submit() {

  
      
      var accept = document.getElementById("accept");
    
      var inpVal = parseFloat(inp.value);
    
      if (!isNaN(inpVal)) {
        console.log("The entered number is:", inpVal);
      } else {
        console.error("Please enter a valid number.");
      }
     
    

}

function clear() {
  var inp = document.getElementById("numInp");
    inp.value = 0;
    var cleared = document.getElementById("clear");
    var inpVal = parseFloat(inp.value);
    console.log("Cleared, your value is " + inpVal);

  
}

function add() {
  


}
