function isSameType(value1, value2) {
  // Convert prompt inputs to values (prompt always returns strings)
  const val1 = value1 === "" ? value1 : isNaN(value1) ? value1 : Number(value1);
  const val2 = value2 === "" ? value2 : isNaN(value2) ? value2 : Number(value2);

  // Check for NaN
  if (Number.isNaN(val1) && Number.isNaN(val2)) return true;

  // Return true if both are of the same type
  return typeof val1 === typeof val2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
