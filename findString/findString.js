/**
 * searches for strings in an object
 * TS type definition of obj would be
 *
 * {
 *  places?: Array<string | { city: string, street: string, country: string }>;
 *  books?: Array<{ title: string, author: string }>;
 * }
 *
 * NOTE: this code has at least two bugs (:
 */
export function findString(obj, searchString) {
  let strings = [];

  if (obj.places !== undefined) {
    obj.places.forEach((place) => {
      if (place.address) {
        if (typeof place.address === "string") {
          strings.push(place.address);
        } else if (typeof place.address === "object") {
          strings.concat(getAddressStrings(place.address));
        }
      }
    });
  }

  if (obj.books !== undefined) {
    for (let i = 0; i < obj.books.length; i++) {
      const book = obj.books[i];
      strings.push(book.titel);
      strings.push(book.author);
    }
  }

  return strings.filter(
    (s) => s !== undefined && s.toLowerCase().includes(searchString)
  );
}

function getAddressStrings(address) {
  return [address.street, address.country, address.city];
}
