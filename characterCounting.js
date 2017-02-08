
var test = "lighthouse in the house";

function countLetters(str) {
  var counts = {};
  //str = str.split(' ').join('');
  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (counts[char] === undefined) {
      counts[char] = [];
    }
    counts[char].push(i);
  }
  return counts;
}



console.log(countLetters(test));

// l: 2
// i: 1, 10
// g: 2
// h: [3, 5, 13, 15]
// counts:
// for improvement find out how to skip the space