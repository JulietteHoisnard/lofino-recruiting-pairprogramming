/**
 * Counts the number of latin letters in an input string.
 * Capital letters are counted as lowercase letters. Non-alphabetic characters are ignored.
 
 * @param input the input string
 * @returns an object with the respective letter as a key and the number of occurances in the string as a value.
 *
 * E.g. countLetters("Hello!")
 *
 * would return
 * ```json
 * {
 *  "h": 1,
 *  "e": 1,
 *  "l": 2,
 *  "o": 1,
 * }
 * ```
 *
 */
export default function countLetters(input) {
  // TODO: implement
    const arrayLetters = input.toLowerCase().split('').filter(letter => letter.match((/^[A-Za-z]+$/)))
  // const letterCounter = {};
  return arrayLetters.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue] === undefined){
        accumulator[currentValue] = 0;
      } 
    accumulator[currentValue] += 1;
    return accumulator;
  }, {});
  // arrayLetters.forEach(letter => {

  //   if (letterCounter[letter] === undefined){
  //     letterCounter[letter] = 0;
  //   } 
  //   letterCounter[letter] += 1;
  // })
  // return letterCounter;
}
