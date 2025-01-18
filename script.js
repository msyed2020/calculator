var inp = document.getElementById("numInp");
var res = 0;

var addBool = 0;
var subBool = 0;
var mulBool = 0;
var divBool = 0;

function submit() {

  
      
      var accept = document.getElementById("accept");
    
      if (inp.value != 0) { // need to configure this to do other stuff like sub/mult/div/etc.
        res += parseFloat(inp.value);
        inp.value = 0;
      }
      var resVal = parseFloat(res);
    
      if (!isNaN(resVal)) {
        console.log("The entered number is:", resVal);
      } else {
        console.error("Please enter a valid number.");
      }
     
      res = 0;

};

function clearValue() {

  inp.value = 0;
  res = 0;
  var cleared = document.getElementById("clear");
  console.log("Cleared, your value is", inp.value);
  
};

function add() {
  
  var existing = parseFloat(inp.value);

  if (!isNaN(existing)) {
    res += existing;
    console.log("Res for reference: " + res);
    inp.value = "";
  }

  addBool = 1;
  subBool = 0;
  mulBool = 0;
  divBool = 0;
};

function subtract() {

  // subtract logic...

  subBool = 1;
  addBool = 0;
  mulBool = 0;
  divBool = 0;
}

function multiply() {

  // multiply logic...

  mulBool = 1;
  addBool = 0;
  subBool = 0;
  divBool = 0;
}