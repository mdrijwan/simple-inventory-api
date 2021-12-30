export function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

export function getVowels(str) {
  const vowelCount = str.match(/[aeiou]/gi);
  return vowelCount === null ? 0 : vowelCount.length;
}

export function nonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    const j = str.charAt(i);
    if (str.indexOf(j) === str.lastIndexOf(j)) {
      return j;
    }
  }
  return null;
}
