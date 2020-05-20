const str = 'nzzvy://skkz.muumrk.ius/mmv-wojh-ten';

function unscramble(code, cycles) {
  const destructuredCode = code.match(/[a-zA-Z]/g);
  const actualCycles = cycles % 52;

  return destructuredCode.map(char => {
    var asciiCodeOfChar = char.charCodeAt();
    // first letter decimal code in ascii table
    // depending on being uppercase or lowercase
    var asciiStart;

    // if character is uppercase letter
    if (asciiCodeOfChar >= 65 && asciiCodeOfChar <= 90) {
      asciiStart = 65;
    }
    // if character is lowercase letter
    else if (asciiCodeOfChar >= 97 && asciiCodeOfChar <= 122) {
      asciiStart = 97;
    }
    const diff = (asciiCodeOfChar - asciiStart + actualCycles) % 26;
    return String.fromCharCode(diff + asciiStart);
  }).join('');
}

console.log(unscramble(str, 7274));