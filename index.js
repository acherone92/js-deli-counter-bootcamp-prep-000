var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeli = katzDeliLine
  var position = parseInt(katzDeliLine[newCust]) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

