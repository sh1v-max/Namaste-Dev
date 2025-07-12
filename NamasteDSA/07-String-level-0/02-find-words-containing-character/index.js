// given array and a char
// return array of indexes of words containing char

// approach:
// two nested loops, outer for words, and inner for char
// if word contains char, push index in a new array
// return array

function findWords(words, char) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === char) {
        res.push(i)
        break
      }
    }
  }
  return res
}
