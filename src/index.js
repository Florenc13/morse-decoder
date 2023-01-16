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

    let arrE = expr.split('');
    let s = 2;
    let dotArr1 = [];
    let points = [];
    let s2 = 5;
    let dotArr2 = [];
    let letter = [];
    let wArr = [];
    let result = [];
    
    
    for (let i= 0; i < arrE.length/s; i++){
        dotArr1[i] = arrE.slice((i*s), (i*s) + s )
        points[i] = dotArr1[i].join('');
    }
    
    points.forEach(item => {
        if (item === '00') {
            dotArr2.push('');        
        } else if (item === '10') {
            dotArr2.push('.');
        } else if ( item === '11') {
            dotArr2.push('-');
        } else {
        dotArr2.push(' ');
        }
    })
    
    for (let i = 0; i <dotArr2.length/s2; i++){
    letter[i] = dotArr2.slice((i*s2), (i*s2) + s2 );
    }

    letter.forEach(item => {wArr.push((item.join('')));})
    wArr.forEach(item => {result.push(MORSE_TABLE[item])})

return result.join('');
    
}

module.exports = {
    decode
}