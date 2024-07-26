// A wolf in sheep's clothing
function warnTheSheep(queue) {
  let orderedQueue = queue.reverse();
  let index = orderedQueue.indexOf("wolf");
  if (index === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${orderedQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "wolf"]));