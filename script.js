var inp = document.getElementById("numInp");

function submit() {

  
      
      var accept = document.getElementById("accept");
    
      var inpVal = parseFloat(inp.value);
    
      if (!isNaN(inpVal)) {
        console.log("The entered number is:", inpVal);
      } else {
        console.error("Please enter a valid number.");
      }
     
    

};

function clearValue() {
  //var inp = document.getElementById("numInp");
  inp.value = 0;
  var cleared = document.getElementById("clear");
  console.log("Cleared, your value is", inp.value);
  

  
};

function add() {
  
  console.log("Add works");

};
