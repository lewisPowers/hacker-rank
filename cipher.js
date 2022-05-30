function caesarCipher(s, k) {
  while (k > 26) k -= 26;
  return s.split('').map(char => isLetter(char) ? convertCharacter(char) : char ).join('');
  function isLetter(char) {
    let regex = /[a-z]/gi;
    return regex.test(char);
  }
  function convertCharacter(char) {
    let code = char.charCodeAt(0);
    let newCode = code + k;
    if (newCode > 122 || newCode > 90 && code < 97) newCode = code - (26 - k);
    return String.fromCharCode(newCode)
  }
}