// Array Array Array
function explode(x) {
  let score = 0;
  let result = [];
  if (typeof x[0] !== "number" && typeof x[1] !== "number") {
    return "Void!";
  } else if (typeof x[0] !== "number" && typeof x[1] === "number") {
    score = x[1];
  } else if (typeof x[0] === "number" && typeof x[1] !== "number") {
    score = x[0];
  } else {
    score = x[0] + x[1];
  }
  for (let i = 0; i < score; i++) {
    result.push(x);
  }
  return result;
}

console.log(explode([4, 2]));
