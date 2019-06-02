let mapping = [
  {multiple: 3, word: 'Fizz'},
  {multiple: 5, word: 'Buzz'},
  {multiple: 2, word: 'Capital'}
]

function printWord(num) {
  for (let i = 1; i <= num; i++) {
    let output = ''
    for (let x = 0; x < mapping.length; x++) {
      if (i % mapping[x].multiple === 0) {
        output += mapping[x].word
      }
    }

    console.log(output || i)
  }
}

printWord(15)
