var katzDeli = [];

function takeANumber(katzDeli, name) {
if (katzDeli.length === 0) {katzDeli.unshift(`${name}`); return `Welcome, ${name}. You are number 1 in line.`}
else {katzDeli.push(`${name}`); return `Welcome, ${name}. You are number ${katzDeli.length} in line.`};
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return (`Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift(); return katzDeliLine;)}
  else return `There is nobody waiting to be served!`;
}





function currentLine(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      return `The line is currently: ${i + 1}. ${line[i]}, ${i + 2}. ${line[i + 1]}, ${i + 3}. ${line[i + 2]}`}
  }
  else return `The line is currently empty.`
}
