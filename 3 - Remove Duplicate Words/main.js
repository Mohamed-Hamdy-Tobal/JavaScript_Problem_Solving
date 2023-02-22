// def remove_duplicate_words_from(sentence):
//   return

// # Testing Ouput
// print(remove_duplicate_words_from("Hello Elzero Web Web Hello School"))
// # Hello Elzero Web School


function remvoeDuplicate(text) {
  text = Array(text).join(" ").split(" ")
  let newText = []
  for (i=0; i < text.length; i++) {
    if (newText.includes(text[i]) === false) {
      newText.push(text[i])
    } 
  }
  return newText.join(" ")
}

console.log(remvoeDuplicate("Hello Elzero Web Web Hello School"))

