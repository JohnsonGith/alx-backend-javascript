export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;  // Use let or const instead of var
    let task2 = false;  // Use let or const instead of var
  }

  return [task, task2];
}
