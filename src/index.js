const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let word ='';
    let k = 0;
    let countChar = expr.length / 10;
    const sepExpr = [];
    while (k < countChar) {
        if (expr.length) {
            sepExpr.push(expr.slice(0, 10));
            expr = expr.slice(10);
        }
        k++;
    }
    for (let exprItem of sepExpr) {
        let i = 0;
        let strChar = '';
        if (exprItem.indexOf('*') !== -1) {
            exprItem = [];
            word = word + ' ';
        }
        else {
            while (i < 10) {
                let charNumber1 = exprItem.indexOf('1');
                i = i + charNumber1 + 2;
                if (exprItem[charNumber1 + 1] == '1') {
                    strChar = strChar + '-';
                }
                else {
                    strChar = strChar + '.';
                }
                if (i <= 8) {
                    exprItem = exprItem.slice(charNumber1 + 2);
                }
                else {
                    exprItem = [];
                }
            }
            word = word + MORSE_TABLE[strChar];
        }
    }
    return word;
}

module.exports = {
    decode
}