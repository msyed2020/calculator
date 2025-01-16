document.addEventListener("DOMContentLoaded", () => {
    var inp = document.getElementById("numInp");
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