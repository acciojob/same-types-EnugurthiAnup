// 
function isSameType(value1, value2) {
  if (value1.trim() === '' && value2.trim() === '') return true;

  // Try to convert to number if possible
  const num1 = value1.trim() === '' ? value1 : Number(value1);
  const num2 = value2.trim() === '' ? value2 : Number(value2);

  // Check if both are NaN
  if (Number.isNaN(num1) && Number.isNaN(num2)) return true;

  // If one is NaN and the other is not
  if (Number.isNaN(num1) || Number.isNaN(num2)) return false;

  // Otherwise, check if types match
  return typeof num1 === typeof num2;
}

// do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

