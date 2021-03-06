/**
 * @returns the count of odd numbers in a range of (0, n], i.e. excluding 0 and including n.
 *
 * A number is defined as odd if the remainder in the division by 2 is 1.
 * @example
 * countOddNumbers(5) should return 3, because 1, 3 and 5 are odd.
 */
export default function countOddNumbers(n) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    i % 2 === 0 ? counter : counter += 1;
  }  
  return counter;
}
