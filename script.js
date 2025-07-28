function isSameType(value1, value2) {    
  // Handle NaN check first
  if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) return true;

  // If one is NaN but not both
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) return false;

  // Compare types directly (string inputs stay string, numbers get converted)
  return typeof value1 === typeof value2;
}

// Do not change below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
