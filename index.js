var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeliLine = katzDeli.push(newCust);
  console.log(katzDeliLine);
  var position = parseInt(katzDeliLine.indexOf()) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

