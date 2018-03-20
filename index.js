var katzDeli = [];

function takeANumber(katzDeliLine, newCust){
  katzDeliLine.push(newCust);
  var position = parseInt(katzDeliLine.indexOf(newCust)) + 1;
  return `Welcome, ${newCust}. You are number ${position} in line.`;
}

function nowServing(){
  
}

function currentLine(deliLine){
    if (deliLine.length===0){
    return "The line is currently empty.";
  }
  else {
    var lineString = [];
    for (let i=0; i<deliLine.length; i++){
    lineString = `${i+1}. ` + deliLine[i];
    }
    return `The line is currently: ${lineString}`;
  }
    
}