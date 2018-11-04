var display = document.getElementById("display-calculator");

var inputNew = false;
var formula = "";
var result = false;
var operator = false;

function checkInputLength() {
  if (formula.length > 15) {
    onClickClear();
    display.innerHTML = "too many numbers :/";
    return true;
  };
  return false;
}

function onClickNr(number) {
  //check for too long input
  if (checkInputLength()) {return;};

  // handle input of a number 
  inputNew = number.toString();
  formula = formula + inputNew;
  operator = false;
  display.innerHTML = formula;
};


function onClickOp(operatorClicked) {
  if (checkInputLength()) {return;};

  //make sure formula doesn't start with an operator
  if (!inputNew && !operator) {
    display.innerHTML = "gimme a number first";
    return;
  };

  //if an operator was already clicked, delete it from the formula and add the new one
  if (operator) {
    var formulaTemp = formula.slice(0, -1);
    formula = formulaTemp + operatorClicked;
    operator: false;
  } else
  {
    formula = formula + operatorClicked;
    inputNew = false;
  }
  display.innerHTML = formula;
  operator = true;
};

function onClickEqual() {
  result = formula + " = " + eval(formula);
  display.innerHTML = result;

  inputNew = false;
  formula = "";
  operator = false;
}

function onClickClear() {
  inputNew = false;
  formula = "";
  result = false;
  operator = false;
  console.log("cleared");
  display.innerHTML = "";
}



function onClickDecimal() {
  //handle too long input
  if (checkInputLength()) {return;};

  // handle input of decimal if there is not yet any number inputted
  if (!inputNew) {
    formula = formula + "0.";
    operator = false;
    display.innerHTML = formula;
  }
  // handle input of a number if there is already a number inputted (add to the number)
  else {
      formula = formula + ".";
      operator = false;
      display.innerHTML = formula;
    }
}