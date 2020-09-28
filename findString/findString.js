/**
 * searches for strings in an object
 * TS type definition of obj would be
 *
 * {
 *  people?: Array<{ email: string }>;
 *  places?: Array<string | { city: string, street: string, country: string }>;
 *  books?: Array<{ title: string, author: string }>;
 * }
 *
 * NOTE: this code has at least two bugs (:
 */
export function findString(obj, searchString) {
  let strings = [];
  if (obj.people !== undefined) {
    let emails = obj.people.map((person) => {
      validatePerson(person);
      return sanitizeEmail(person.email);
    });
    emails.forEach((s) => strings.push(s));
  }

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

function validatePerson(person) {
  if (!person) throw new Error("person is undefined");
  if (!person.email) throw new Error("person has no email");
}

function sanitizeEmail(emailAddress) {
  return emailAddress.trim().toLowerCase();
}
