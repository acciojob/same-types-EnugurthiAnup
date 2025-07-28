// 
function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if types are the same
  return typeof value1 === typeof value2;
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Coerce numeric strings to numbers where appropriate
let parsedValue1 = isNaN(value1) ? value1 : Number(value1);
let parsedValue2 = isNaN(value2) ? value2 : Number(value2);

// Use the parsed values in the comparison
alert(isSameType(parsedValue1, parsedValue2));
