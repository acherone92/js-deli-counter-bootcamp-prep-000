var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeliLine.push(newCust);
  console.log(katzDeliLine);
  var position = parseInt(katzDeliLine.indexOf(newCust)) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

function currentLine(deliLine){
  var lineArr = [];
  if (deliLine === []){
    return "The line is currentlty empty.";
  }
  else {
    for (let i=0; i<deliLine; i++){
    lineArr[i] = `${i}. ` + deliLine[i];
    }
    return `The line is currently: ${lineArr}`;
  }
    
}