const morseDict = new Object();

morseDict['A'] = '·—';
morseDict['B'] = '—···';
morseDict['C'] = '—·—·';
morseDict['D'] = '—··';
morseDict['E'] = '·';
morseDict['F'] = '··—·';
morseDict['G'] = '——·';
morseDict['H'] = '····';
morseDict['I'] = '··';
morseDict['J'] = '·———';
morseDict['K'] = '—·—';
morseDict['L'] = '·—··';
morseDict['M'] = '——';
morseDict['N'] = '—·';
morseDict['O'] = '———';
morseDict['P'] = '·——·';
morseDict['Q'] = '——·—';
morseDict['R'] = '·—·';
morseDict['S'] = '···';
morseDict['T'] = '—';
morseDict['U'] = '··—';
morseDict['V'] = '···—';
morseDict['W'] = '·——';
morseDict['X'] = '—··—';
morseDict['Y'] = '—·——';
morseDict['Z'] = '——··';


morseDict['0']='—————';
morseDict['1']='·————';
morseDict['2']='··———';
morseDict['3']='···——';
morseDict['4']='····—';
morseDict['5']='·····';
morseDict['6']='—····';
morseDict['7']='——···';
morseDict['8']='———··';
morseDict['9']='————·';

morseDict['.']='·—·—·—';
morseDict[',']='——··——';
morseDict['?']='··——··';
morseDict['!']='—·—·——';
morseDict['-']='—····—';
morseDict['/']='—··—·';
morseDict[':']='———···';
morseDict['-']='—····—';
morseDict[')']='—·——·—';
morseDict[';']='—·—·—';
morseDict['(']='—·——·';
morseDict['=']='—···—';
morseDict['@']='·——·—·';
morseDict['&']='·–···';

morseDict[' ']=' ';

const reverseDict = {};

for(let c in morseDict){
	// DIt is de omgekeerde volgorde van hierboven
	// morseDict['&']='·–···';   => morseDict['·–···']='&';
	reverseDict[morseDict[c]] = c;
}

function toMorse(text){
	text = text.toUpperCase();

	let result = [];

	for(let c of text.split('')){
		c = morseDict[c];
		result.push(c);
	}

	return result.join('|');
}

let morse = toMorse('hello world');
console.log(morse);

function fromMorse(morseCode){

	let result = [];

	for(let c of morseCode.split('|')){
		c = reverseDict[c];
		result.push(c);
	}

	return result.join('');
}

let text = fromMorse(morse);
console.log(text);