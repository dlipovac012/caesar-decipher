const str = 'nzzvy://skkz.muumrk.ius/mmv-wojh-ten';

function unscramble(code, cycles) {
  const actualCycles = cycles % 52;
  
  return str.split('').map(char => {
    var asciiCodeOfChar = char.charCodeAt();
    // first letter decimal code in ascii table
    // depending on being uppercase or lowercase
    var asciiStart;
    var diff;

    // if character is uppercase letter
    if (asciiCodeOfChar >= 65 && asciiCodeOfChar <= 90) {
      asciiStart = 65;
      diff = (asciiCodeOfChar - asciiStart + actualCycles) % 26;
    }
    // if character is lowercase letter
    else if (asciiCodeOfChar >= 97 && asciiCodeOfChar <= 122) {
      asciiStart = 97;
      diff = (asciiCodeOfChar - asciiStart + actualCycles) % 26;
    }
    // all other cases (symbols and everything)
    else {
      asciiStart = char.charCodeAt();
      diff = 0;
    }
    return String.fromCharCode(diff + asciiStart);
  }).join('');
}

console.log(unscramble(str, 7274));