var katzDeli = [];

function takeANumber(katzDeliLine, name) {
if (katzDeliLine.length === 0) {katzDeliLine.unshift(`${name}`); return `Welcome, ${name}. You are number 1 in line.`}
else {katzDeliLine.push(`${name}`); return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`};
}

function nowServing(katzDeliLine) {var newLine = katzDeliLine.slice(1, 3);
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine[0]}.`, newLine}
  else return `There is nobody waiting to be served!`;
}



function currentLine(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      return `The line is currently: ${i + 1}. ${line[i]}, ${i + 2}. ${line[i + 1]}, ${i + 3}. ${line[i + 2]}`}
  }
  else return `The line is currently empty.`
}
