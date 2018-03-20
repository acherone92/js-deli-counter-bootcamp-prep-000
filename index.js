var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeliLine[newCust]=katzDeli
  console.log(katzDeliLine);
  var position = parseInt(katzDeliLine[newCust]) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

